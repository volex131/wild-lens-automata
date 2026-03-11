import { type VideoJob } from "@/data/pipeline";
import { Progress } from "@/components/ui/progress";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobQueueProps {
  jobs: VideoJob[];
  onExport: (job: VideoJob) => void;
}

export const JobQueue = ({ jobs, onExport }: JobQueueProps) => {
  if (jobs.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
        Job Queue ({jobs.length})
      </h3>
      <div className="space-y-2">
        {jobs.map((job) => (
          <div key={job.id} className="p-3 rounded-md bg-secondary/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{job.animalName}</span>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-xs font-mono",
                  job.stage === "complete" && "text-success",
                  job.stage === "error" && "text-destructive",
                  job.stage !== "complete" && job.stage !== "error" && job.stage !== "idle" && "text-processing"
                )}>
                  {job.stage === "idle" ? "QUEUED" : job.stage.toUpperCase()}
                </span>
                {job.stage === "complete" && (
                  <button onClick={() => onExport(job)} className="p-1 rounded hover:bg-secondary">
                    <Download className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            </div>
            <Progress value={job.progress} className="h-1" />
          </div>
        ))}
      </div>
    </div>
  );
};