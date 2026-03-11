import { Activity, Database, Clapperboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeaderProps {
  systemStatus: "idle" | "processing" | "complete" | "error";
}

export const Header = ({ systemStatus }: HeaderProps) => {
  const location = useLocation();

  const statusConfig = {
    idle: { label: "STANDBY", className: "text-muted-foreground" },
    processing: { label: "PROCESSING", className: "text-processing animate-pulse-glow" },
    complete: { label: "COMPLETE", className: "text-success" },
    error: { label: "ERROR", className: "text-destructive" },
  };

  const status = statusConfig[systemStatus];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-card shadow-lg shadow-background/50">
      <div className="flex items-center gap-3">
        <Clapperboard className="h-6 w-6 text-primary" />
        <h1 className="text-lg font-semibold tracking-tight">Wildlife POV Factory</h1>
      </div>

      <nav className="flex items-center gap-1">
        <Link
          to="/"
          className={cn(
            "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
            location.pathname === "/" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          Dashboard
        </Link>
        <Link
          to="/animals"
          className={cn(
            "px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5",
            location.pathname === "/animals" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Database className="h-3.5 w-3.5" />
          Animals
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <Activity className={cn("h-4 w-4", status.className)} />
        <span className={cn("text-xs font-mono font-medium tracking-wider", status.className)}>
          {status.label}
        </span>
      </div>
    </header>
  );
};