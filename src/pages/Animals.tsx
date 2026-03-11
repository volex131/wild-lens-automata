import { useState } from "react";
import { Header } from "@/components/Header";
import { animals, type AnimalCategory } from "@/data/animals";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Camera, TreePine } from "lucide-react";

const categories: AnimalCategory[] = ["Birds", "Insects", "Reptiles", "Amphibians", "Small Mammals", "Marine Animals"];

const categoryEmojis: Record<AnimalCategory, string> = {
  Birds: "🐦",
  Insects: "🐜",
  Reptiles: "🦎",
  Amphibians: "🐸",
  "Small Mammals": "🐭",
  "Marine Animals": "🦀",
};

const Animals = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filtered = animals.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.habitat.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory === "all" || a.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header systemStatus="idle" />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Animal Database</h1>
              <p className="text-sm text-muted-foreground">{animals.length} species across {categories.length} categories</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search animals..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 w-60 bg-secondary border-0"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-44 bg-secondary border-0">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{categoryEmojis[c]} {c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((animal) => (
              <div
                key={animal.id}
                className="p-4 rounded-lg bg-card shadow-lg shadow-background/30 hover:bg-surface-raised transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{categoryEmojis[animal.category]}</span>
                    <h3 className="font-medium">{animal.name}</h3>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground">
                    {animal.category}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    <span>{animal.habitat}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Camera className="h-3 w-3" />
                    <span>{animal.cameraHarness}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TreePine className="h-3 w-3" />
                    <span>{animal.environment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p>No animals found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Animals;