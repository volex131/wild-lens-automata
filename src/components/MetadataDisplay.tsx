import { type YouTubeMetadata } from "@/data/pipeline";
import { Copy, Hash, Key, FileText } from "lucide-react";
import { toast } from "sonner";

interface MetadataDisplayProps {
  metadata: YouTubeMetadata;
}

export const MetadataDisplay = ({ metadata }: MetadataDisplayProps) => {
  const copyAll = () => {
    const text = `Title: ${metadata.title}\n\nDescription:\n${metadata.description}\n\nHashtags:\n${metadata.hashtags.join(" ")}\n\nKeywords:\n${metadata.keywords.join(", ")}`;
    navigator.clipboard.writeText(text);
    toast.success("Metadata copied to clipboard");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase">
          YouTube Metadata
        </h3>
        <button onClick={copyAll} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
          <Copy className="h-3 w-3" /> Copy All
        </button>
      </div>

      <div className="space-y-2">
        <div className="p-3 rounded-md bg-secondary/50">
          <div className="flex items-center gap-1.5 mb-1">
            <FileText className="h-3 w-3 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">Title</span>
          </div>
          <p className="text-sm font-medium">{metadata.title}</p>
        </div>

        <div className="p-3 rounded-md bg-secondary/50">
          <div className="flex items-center gap-1.5 mb-1">
            <FileText className="h-3 w-3 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">Description</span>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed whitespace-pre-line">{metadata.description}</p>
        </div>

        <div className="p-3 rounded-md bg-secondary/50">
          <div className="flex items-center gap-1.5 mb-1">
            <Hash className="h-3 w-3 text-accent" />
            <span className="text-xs font-mono text-muted-foreground">Hashtags</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {metadata.hashtags.map((h, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-sm bg-accent/10 text-accent">
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-md bg-secondary/50">
          <div className="flex items-center gap-1.5 mb-1">
            <Key className="h-3 w-3 text-processing" />
            <span className="text-xs font-mono text-muted-foreground">SEO Keywords</span>
          </div>
          <p className="text-xs text-foreground/70">{metadata.keywords.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};