import { cn } from "@/lib/utils";
import { pipelineSteps, type PipelineStage } from "@/data/pipeline";
import { Check, Loader2, Circle } from "lucide-react";

interface PipelineMonitorProps {
  currentStage: PipelineStage;
}

const stageOrder: PipelineStage[] = ["prompts", "images", "video", "assembly", "metadata"];

export const PipelineMonitor = ({ currentStage }: PipelineMonitorProps) => {
  const currentIndex = stageOrder.indexOf(currentStage);
  const isComplete = currentStage === "complete";

  return (
    <div className="space-y-1">
      <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase mb-3">
        Pipeline Status
      </h3>
      <div className="space-y-2">
        {pipelineSteps.map((step, index) => {
          const isActive = step.id === currentStage;
          const isDone = isComplete || (currentIndex >= 0 && index < currentIndex);
          const isPending = !isActive && !isDone;

          return (
            <div
              key={step.id}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
                isActive && "bg-processing/10",
                isDone && "bg-success/5"
              )}
            >
              {isDone ? (
                <Check className="h-4 w-4 text-success flex-shrink-0" />
              ) : isActive ? (
                <Loader2 className="h-4 w-4 text-processing animate-spin flex-shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
              )}
              <div className="min-w-0">
                <p className={cn(
                  "text-sm font-medium",
                  isActive && "text-processing",
                  isDone && "text-success",
                  isPending && "text-muted-foreground/50"
                )}>
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground truncate">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};