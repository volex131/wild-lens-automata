import { useState, useCallback, useRef } from "react";
import { type PipelineStage, type PromptBlock, type YouTubeMetadata, type VideoJob } from "@/data/pipeline";
import { type Animal } from "@/data/animals";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function usePipeline() {
  const [stage, setStage] = useState<PipelineStage>("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [prompts, setPrompts] = useState<PromptBlock[]>([]);
  const [metadata, setMetadata] = useState<YouTubeMetadata | null>(null);
  const [ideas, setIdeas] = useState<string[]>([]);
  const [jobs, setJobs] = useState<VideoJob[]>([]);
  const [currentAnimal, setCurrentAnimal] = useState<string>("");
  const isProcessing = stage !== "idle" && stage !== "complete" && stage !== "error";

  const log = useCallback((msg: string) => {
    setLogs((prev) => [...prev, msg]);
  }, []);

  const generatePrompts = useCallback(async (animal: Animal, style: string): Promise<PromptBlock[]> => {
    log(`[PROCESSING] Sending prompt request for ${animal.name}...`);
    
    try {
      const { data, error } = await supabase.functions.invoke("generate-prompts", {
        body: { animal, style },
      });

      if (error) throw error;

      const blocks: PromptBlock[] = data.prompts;
      log(`[OK] Received ${blocks.length} prompt blocks`);
      return blocks;
    } catch (e: any) {
      log(`[ERROR] Prompt generation failed: ${e.message}`);
      throw e;
    }
  }, [log]);

  const generateMetadata = useCallback(async (animal: Animal, style: string): Promise<YouTubeMetadata> => {
    log(`[PROCESSING] Generating YouTube metadata...`);
    
    try {
      const { data, error } = await supabase.functions.invoke("generate-metadata", {
        body: { animal, style },
      });

      if (error) throw error;

      log(`[OK] YouTube metadata generated`);
      return data.metadata;
    } catch (e: any) {
      log(`[ERROR] Metadata generation failed: ${e.message}`);
      throw e;
    }
  }, [log]);

  const generateIdeas = useCallback(async () => {
    log(`[PROCESSING] Generating wildlife POV ideas...`);
    
    try {
      const { data, error } = await supabase.functions.invoke("generate-ideas", {
        body: {},
      });

      if (error) throw error;

      setIdeas(data.ideas);
      log(`[OK] Generated ${data.ideas.length} ideas`);
      toast.success(`Generated ${data.ideas.length} wildlife POV ideas`);
    } catch (e: any) {
      log(`[ERROR] Idea generation failed: ${e.message}`);
      toast.error("Failed to generate ideas");
    }
  }, [log]);

  const simulateStage = useCallback(async (stageName: PipelineStage, label: string, durationMs: number) => {
    setStage(stageName);
    log(`[PROCESSING] ${label}...`);
    const steps = 5;
    for (let i = 0; i < steps; i++) {
      await delay(durationMs / steps);
      log(`[PROCESSING] ${label} — ${Math.round(((i + 1) / steps) * 100)}%`);
    }
    log(`[OK] ${label} complete`);
  }, [log]);

  const runPipeline = useCallback(async (animal: Animal, style: string) => {
    setLogs([]);
    setPrompts([]);
    setMetadata(null);
    setCurrentAnimal(animal.name);

    log(`━━━ WILDLIFE POV FACTORY ━━━`);
    log(`Animal: ${animal.name} | Style: ${style} | ${new Date().toISOString()}`);
    log(`━━━━━━━━━━━━━━━━━━━━━━━━━━`);

    try {
      // Stage 1: Prompts (real AI)
      setStage("prompts");
      const blocks = await generatePrompts(animal, style);
      setPrompts(blocks);

      // Stage 2: Images (simulated)
      await simulateStage("images", "Generating macro wildlife images", 3000);

      // Stage 3: Video clips (simulated)
      await simulateStage("video", "Rendering 8-second motion clips", 4000);

      // Stage 4: Assembly (simulated)
      await simulateStage("assembly", "Stitching clips + adding ambient audio", 2000);

      // Stage 5: Metadata (real AI)
      setStage("metadata");
      const meta = await generateMetadata(animal, style);
      setMetadata(meta);

      setStage("complete");
      log(`[OK] ✓ Pipeline complete — ${animal.name} POV video ready`);
      toast.success(`${animal.name} POV video pipeline complete!`);
    } catch {
      setStage("error");
      log(`[ERROR] Pipeline failed`);
      toast.error("Pipeline failed. Check logs.");
    }
  }, [log, generatePrompts, generateMetadata, simulateStage]);

  const runBatch = useCallback(async (batchSize: number, style: string) => {
    const { animals } = await import("@/data/animals");
    const shuffled = [...animals].sort(() => Math.random() - 0.5).slice(0, batchSize);

    const newJobs: VideoJob[] = shuffled.map((a) => ({
      id: `${a.id}-${Date.now()}`,
      animalName: a.name,
      stage: "idle" as PipelineStage,
      progress: 0,
      prompts: [],
      metadata: null,
      logs: [],
      createdAt: new Date(),
    }));

    setJobs(newJobs);
    log(`[PROCESSING] Batch mode: ${batchSize} videos queued`);

    for (let i = 0; i < newJobs.length; i++) {
      const animal = shuffled[i];
      setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "prompts" as PipelineStage, progress: 10 } : j));
      log(`[PROCESSING] Batch ${i + 1}/${newJobs.length}: ${animal.name}`);

      try {
        // Real prompt generation
        const { data } = await supabase.functions.invoke("generate-prompts", {
          body: { animal, style },
        });

        setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "images" as PipelineStage, progress: 30, prompts: data.prompts } : j));
        await delay(1500);

        setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "video" as PipelineStage, progress: 50 } : j));
        await delay(2000);

        setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "assembly" as PipelineStage, progress: 70 } : j));
        await delay(1000);

        // Real metadata generation
        const { data: metaData } = await supabase.functions.invoke("generate-metadata", {
          body: { animal, style },
        });

        setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "complete" as PipelineStage, progress: 100, metadata: metaData.metadata } : j));
        log(`[OK] Batch ${i + 1}/${newJobs.length}: ${animal.name} complete`);
      } catch {
        setJobs((prev) => prev.map((j, idx) => idx === i ? { ...j, stage: "error" as PipelineStage } : j));
        log(`[ERROR] Batch ${i + 1}: ${animal.name} failed`);
      }
    }

    log(`[OK] Batch processing complete`);
    toast.success("Batch processing complete!");
  }, [log]);

  const exportJob = useCallback((job: VideoJob) => {
    const exportData = {
      animal: job.animalName,
      prompts: job.prompts,
      metadata: job.metadata,
      generatedAt: job.createdAt.toISOString(),
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${job.animalName.toLowerCase().replace(/\s+/g, "_")}_pov_video_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Export downloaded");
  }, []);

  const dismissIdea = useCallback((index: number) => {
    setIdeas((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return {
    stage,
    logs,
    prompts,
    metadata,
    ideas,
    jobs,
    currentAnimal,
    isProcessing,
    runPipeline,
    runBatch,
    generateIdeas,
    exportJob,
    dismissIdea,
  };
}