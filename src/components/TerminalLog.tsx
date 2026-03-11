import { useEffect, useRef } from "react";

interface TerminalLogProps {
  logs: string[];
}

export const TerminalLog = ({ logs }: TerminalLogProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-processing/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground">factory.log</span>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto terminal-scroll px-3 pb-3 font-mono text-xs leading-relaxed"
      >
        {logs.length === 0 ? (
          <p className="text-muted-foreground/40">Awaiting commands...</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-muted-foreground/30 select-none">{String(i + 1).padStart(3, "0")}</span>
              <span className={
                log.startsWith("[ERROR]") ? "text-destructive" :
                log.startsWith("[OK]") ? "text-success" :
                log.startsWith("[PROCESSING]") ? "text-processing" :
                "text-terminal/70"
              }>
                {log}
              </span>
            </div>
          ))
        )}
        <div className="flex gap-2 mt-1">
          <span className="text-muted-foreground/30 select-none">{String(logs.length + 1).padStart(3, "0")}</span>
          <span className="text-terminal/70 animate-pulse">▌</span>
        </div>
      </div>
    </div>
  );
};