export type AnimalCategory = "Birds" | "Insects" | "Reptiles" | "Amphibians" | "Small Mammals" | "Marine Animals";

export interface Animal {
  id: string;
  name: string;
  category: AnimalCategory;
  habitat: string;
  cameraHarness: string;
  environment: string;
}

export const animals: Animal[] = [
  // Birds
  { id: "b1", name: "Eagle", category: "Birds", habitat: "Mountain cliffs", cameraHarness: "Chest-mount micro cam", environment: "Alpine peaks with thermal updrafts" },
  { id: "b2", name: "Hummingbird", category: "Birds", habitat: "Tropical gardens", cameraHarness: "Ultra-light dorsal clip", environment: "Flower-rich subtropical canopy" },
  { id: "b3", name: "Owl", category: "Birds", habitat: "Dense forest", cameraHarness: "Head-mount night vision", environment: "Old growth forest with dead trees" },
  { id: "b4", name: "Kingfisher", category: "Birds", habitat: "River banks", cameraHarness: "Waterproof chest cam", environment: "Clear freshwater streams" },
  { id: "b5", name: "Penguin", category: "Birds", habitat: "Antarctic ice", cameraHarness: "Belly-mount waterproof cam", environment: "Ice shelf and sub-zero ocean" },

  // Insects
  { id: "i1", name: "Ant", category: "Insects", habitat: "Underground colony", cameraHarness: "Nano thorax mount", environment: "Subterranean tunnel network" },
  { id: "i2", name: "Spider", category: "Insects", habitat: "Web structures", cameraHarness: "Cephalothorax micro cam", environment: "Garden with silk web architecture" },
  { id: "i3", name: "Dragonfly", category: "Insects", habitat: "Wetlands", cameraHarness: "Thorax clip cam", environment: "Pond surface with reed beds" },
  { id: "i4", name: "Beetle", category: "Insects", habitat: "Forest floor", cameraHarness: "Elytra dorsal mount", environment: "Decaying log ecosystem" },
  { id: "i5", name: "Butterfly", category: "Insects", habitat: "Meadows", cameraHarness: "Wing-base micro sensor", environment: "Wildflower meadow in spring" },
  { id: "i6", name: "Praying Mantis", category: "Insects", habitat: "Garden foliage", cameraHarness: "Head-mount micro cam", environment: "Dense leafy vegetation" },

  // Reptiles
  { id: "r1", name: "Chameleon", category: "Reptiles", habitat: "Tropical canopy", cameraHarness: "Dorsal ridge mount", environment: "Madagascar rainforest branches" },
  { id: "r2", name: "Sea Turtle", category: "Reptiles", habitat: "Coral reefs", cameraHarness: "Shell-top waterproof cam", environment: "Tropical reef with seagrass beds" },
  { id: "r3", name: "Gecko", category: "Reptiles", habitat: "Rocky walls", cameraHarness: "Back-mount adhesive cam", environment: "Limestone cliff face at dusk" },
  { id: "r4", name: "Komodo Dragon", category: "Reptiles", habitat: "Island scrubland", cameraHarness: "Neck-collar cam", environment: "Indonesian dry savanna" },
  { id: "r5", name: "Snake", category: "Reptiles", habitat: "Grasslands", cameraHarness: "Head-band micro cam", environment: "Tall grass prairie ecosystem" },

  // Amphibians
  { id: "a1", name: "Frog", category: "Amphibians", habitat: "Swamp", cameraHarness: "Dorsal adhesive micro cam", environment: "Tropical swamp with lily pads" },
  { id: "a2", name: "Salamander", category: "Amphibians", habitat: "Damp caves", cameraHarness: "Back-mount waterproof cam", environment: "Underground cave with streams" },
  { id: "a3", name: "Poison Dart Frog", category: "Amphibians", habitat: "Rainforest floor", cameraHarness: "Nano dorsal mount", environment: "Humid rainforest leaf litter" },
  { id: "a4", name: "Axolotl", category: "Amphibians", habitat: "Lake beds", cameraHarness: "Gill-frame waterproof cam", environment: "Mexican lake with aquatic plants" },
  { id: "a5", name: "Newt", category: "Amphibians", habitat: "Woodland ponds", cameraHarness: "Dorsal micro clip", environment: "Temperate forest pond" },

  // Small Mammals
  { id: "m1", name: "Mouse", category: "Small Mammals", habitat: "Fields", cameraHarness: "Collar micro cam", environment: "Wheat field with burrow network" },
  { id: "m2", name: "Bat", category: "Small Mammals", habitat: "Caves", cameraHarness: "Chest-mount infrared cam", environment: "Limestone cave system at dusk" },
  { id: "m3", name: "Squirrel", category: "Small Mammals", habitat: "Deciduous forest", cameraHarness: "Harness vest cam", environment: "Oak forest canopy in autumn" },
  { id: "m4", name: "Hedgehog", category: "Small Mammals", habitat: "Suburban gardens", cameraHarness: "Spine-mount cam", environment: "English garden at night" },
  { id: "m5", name: "Mole", category: "Small Mammals", habitat: "Underground tunnels", cameraHarness: "Head-mount infrared cam", environment: "Subterranean soil network" },

  // Marine Animals
  { id: "s1", name: "Crab", category: "Marine Animals", habitat: "Coral reef", cameraHarness: "Carapace top mount", environment: "Tropical coral reef with anemones" },
  { id: "s2", name: "Octopus", category: "Marine Animals", habitat: "Rocky seabed", cameraHarness: "Mantle suction cam", environment: "Deep reef crevice system" },
  { id: "s3", name: "Seahorse", category: "Marine Animals", habitat: "Seagrass beds", cameraHarness: "Dorsal fin micro cam", environment: "Shallow seagrass meadow" },
  { id: "s4", name: "Jellyfish", category: "Marine Animals", habitat: "Open ocean", cameraHarness: "Bell-surface adhesive cam", environment: "Deep blue open water column" },
  { id: "s5", name: "Starfish", category: "Marine Animals", habitat: "Tidal pools", cameraHarness: "Central disc mount", environment: "Rocky intertidal zone" },
];