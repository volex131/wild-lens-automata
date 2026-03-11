import { type PromptBlock } from "@/data/pipeline";
import { Copy, Image, Video } from "lucide-react";
import { toast } from "sonner";

interface PromptDisplayProps {
  prompts: PromptBlock[];
  animalName: string;
}

export const PromptDisplay = ({ prompts, animalName }: PromptDisplayProps) => {
  const copyPrompt = (text: string, block: number) => {
    navigator.clipboard.writeText(text);
    toast.success(`Block ${block} copied to clipboard`);
  };

  if (prompts.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
        Prompt Blocks — {animalName}
      </h3>
      <div className="grid gap-2">
        {prompts.map((p) => (
          <div
            key={p.blockNumber}
            className="group p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                {p.type === "image" ? (
                  <Image className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Video className="h-3.5 w-3.5 text-accent" />
                )}
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  Block {String(p.blockNumber).padStart(2, "0")} — {p.type === "image" ? "Image" : "Motion"}
                </span>
              </div>
              <button
                onClick={() => copyPrompt(p.prompt, p.blockNumber)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed">{p.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};