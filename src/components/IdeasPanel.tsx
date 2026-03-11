import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, X, Lightbulb } from "lucide-react";

interface IdeasPanelProps {
  ideas: string[];
  onSelect: (idea: string) => void;
  onDismiss: (index: number) => void;
}

export const IdeasPanel = ({ ideas, onSelect, onDismiss }: IdeasPanelProps) => {
  if (ideas.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
          Generated Ideas ({ideas.length})
        </h3>
      </div>
      <ScrollArea className="h-60">
        <div className="space-y-1 pr-3">
          {ideas.map((idea, i) => (
            <div
              key={i}
              className="group flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary/50 transition-colors"
            >
              <p className="text-xs text-foreground/80 flex-1">{idea}</p>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onSelect(idea)}
                  className="p-1 rounded hover:bg-success/20"
                >
                  <Check className="h-3.5 w-3.5 text-success" />
                </button>
                <button
                  onClick={() => onDismiss(i)}
                  className="p-1 rounded hover:bg-destructive/20"
                >
                  <X className="h-3.5 w-3.5 text-destructive" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};