import { Header } from "@/components/Header";
import { ConfigPanel } from "@/components/ConfigPanel";
import { PipelineMonitor } from "@/components/PipelineMonitor";
import { TerminalLog } from "@/components/TerminalLog";
import { PromptDisplay } from "@/components/PromptDisplay";
import { MetadataDisplay } from "@/components/MetadataDisplay";
import { IdeasPanel } from "@/components/IdeasPanel";
import { JobQueue } from "@/components/JobQueue";
import { usePipeline } from "@/hooks/usePipeline";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const {
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
  } = usePipeline();

  const systemStatus = stage === "idle" ? "idle" : stage === "complete" ? "complete" : stage === "error" ? "error" : "processing";

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header systemStatus={systemStatus} />

      <div className="flex-1 grid grid-cols-12 gap-0 overflow-hidden">
        {/* Left Panel — Config */}
        <div className="col-span-3 bg-card shadow-xl shadow-background/30 overflow-y-auto p-5">
          <ConfigPanel
            onGenerate={runPipeline}
            onBatchGenerate={runBatch}
            onGenerateIdeas={generateIdeas}
            isProcessing={isProcessing}
          />
        </div>

        {/* Center Panel — Output */}
        <ScrollArea className="col-span-5 p-5">
          <div className="space-y-6 pr-2">
            {ideas.length > 0 && (
              <IdeasPanel
                ideas={ideas}
                onSelect={(idea) => console.log("Selected idea:", idea)}
                onDismiss={dismissIdea}
              />
            )}
            
            {prompts.length > 0 && (
              <PromptDisplay prompts={prompts} animalName={currentAnimal} />
            )}

            {metadata && <MetadataDisplay metadata={metadata} />}

            {jobs.length > 0 && <JobQueue jobs={jobs} onExport={exportJob} />}

            {!ideas.length && !prompts.length && !metadata && !jobs.length && (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl">🦅</span>
                </div>
                <h2 className="text-lg font-medium mb-1">Ready to Generate</h2>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Select an animal and click Generate Video to start the AI pipeline, or generate ideas for inspiration.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Right Panel — Pipeline + Terminal */}
        <div className="col-span-4 flex flex-col bg-card shadow-xl shadow-background/30 overflow-hidden">
          <div className="p-5 border-b border-border/50">
            <PipelineMonitor currentStage={stage} />
          </div>
          <div className="flex-1 overflow-hidden">
            <TerminalLog logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;