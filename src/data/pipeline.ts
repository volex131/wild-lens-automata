export type PipelineStage = "idle" | "prompts" | "images" | "video" | "assembly" | "metadata" | "complete" | "error";

export interface PipelineStep {
  id: PipelineStage;
  label: string;
  description: string;
}

export const pipelineSteps: PipelineStep[] = [
  { id: "prompts", label: "Prompts", description: "Generating AI prompt blocks via Gemini" },
  { id: "images", label: "Images", description: "Generating ultra-realistic macro images" },
  { id: "video", label: "Video Clips", description: "Rendering 8-second motion clips" },
  { id: "assembly", label: "Assembly", description: "Stitching clips + ambient audio" },
  { id: "metadata", label: "Metadata", description: "Generating YouTube SEO content" },
];

export interface PromptBlock {
  blockNumber: number;
  type: "image" | "motion";
  prompt: string;
}

export interface YouTubeMetadata {
  title: string;
  description: string;
  hashtags: string[];
  keywords: string[];
}

export interface VideoJob {
  id: string;
  animalName: string;
  stage: PipelineStage;
  progress: number;
  prompts: PromptBlock[];
  metadata: YouTubeMetadata | null;
  logs: string[];
  createdAt: Date;
}

export const videoStyles = [
  { id: "cinematic", label: "Cinematic Documentary" },
  { id: "macro", label: "Macro Close-Up" },
  { id: "aerial", label: "Aerial Wildlife" },
  { id: "underwater", label: "Underwater Exploration" },
  { id: "nightvision", label: "Night Vision" },
];