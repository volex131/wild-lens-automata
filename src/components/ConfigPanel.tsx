import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { animals, type Animal, type AnimalCategory } from "@/data/animals";
import { videoStyles } from "@/data/pipeline";
import { Play, Layers, Download, Sparkles } from "lucide-react";

const categories: AnimalCategory[] = ["Birds", "Insects", "Reptiles", "Amphibians", "Small Mammals", "Marine Animals"];

interface ConfigPanelProps {
  onGenerate: (animal: Animal, style: string) => void;
  onBatchGenerate: (batchSize: number, style: string) => void;
  onGenerateIdeas: () => void;
  isProcessing: boolean;
}

export const ConfigPanel = ({ onGenerate, onBatchGenerate, onGenerateIdeas, isProcessing }: ConfigPanelProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAnimalId, setSelectedAnimalId] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("cinematic");
  const [batchSize, setBatchSize] = useState([5]);

  const filteredAnimals = selectedCategory === "all"
    ? animals
    : animals.filter((a) => a.category === selectedCategory);

  const selectedAnimal = animals.find((a) => a.id === selectedAnimalId);

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xs font-mono font-medium text-muted-foreground tracking-wider uppercase mb-3">
          Configuration
        </h3>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Category</label>
        <Select value={selectedCategory} onValueChange={(v) => { setSelectedCategory(v); setSelectedAnimalId(""); }}>
          <SelectTrigger className="bg-secondary border-0 shadow-md shadow-background/50">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Animal Selector */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Animal</label>
        <Select value={selectedAnimalId} onValueChange={setSelectedAnimalId}>
          <SelectTrigger className="bg-secondary border-0 shadow-md shadow-background/50">
            <SelectValue placeholder="Select animal..." />
          </SelectTrigger>
          <SelectContent>
            {filteredAnimals.map((a) => (
              <SelectItem key={a.id} value={a.id}>
                {a.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Selected Animal Info */}
      {selectedAnimal && (
        <div className="p-3 rounded-md bg-secondary/50 space-y-1">
          <p className="text-xs text-muted-foreground">Habitat: <span className="text-foreground">{selectedAnimal.habitat}</span></p>
          <p className="text-xs text-muted-foreground">Camera: <span className="text-foreground">{selectedAnimal.cameraHarness}</span></p>
          <p className="text-xs text-muted-foreground">Environment: <span className="text-foreground">{selectedAnimal.environment}</span></p>
        </div>
      )}

      {/* Style Selector */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Video Style</label>
        <Select value={selectedStyle} onValueChange={setSelectedStyle}>
          <SelectTrigger className="bg-secondary border-0 shadow-md shadow-background/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {videoStyles.map((s) => (
              <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Batch Size */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-xs font-medium text-muted-foreground">Batch Size</label>
          <span className="text-xs font-mono text-primary">{batchSize[0]} videos</span>
        </div>
        <Slider
          value={batchSize}
          onValueChange={setBatchSize}
          min={1}
          max={20}
          step={1}
          className="py-1"
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <Button
          className="w-full shadow-lg shadow-primary/20"
          onClick={() => selectedAnimal && onGenerate(selectedAnimal, selectedStyle)}
          disabled={!selectedAnimal || isProcessing}
        >
          <Play className="h-4 w-4" />
          Generate Video
        </Button>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onBatchGenerate(batchSize[0], selectedStyle)}
          disabled={isProcessing}
        >
          <Layers className="h-4 w-4" />
          Generate Batch ({batchSize[0]})
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={onGenerateIdeas}
          disabled={isProcessing}
        >
          <Sparkles className="h-4 w-4" />
          Generate Ideas
        </Button>
      </div>
    </div>
  );
};