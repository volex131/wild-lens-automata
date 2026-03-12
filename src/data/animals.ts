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
  // Birds (9)
  { id: "b1", name: "Eagle", category: "Birds", habitat: "Mountain cliffs", cameraHarness: "Chest-mount micro cam", environment: "Alpine peaks with thermal updrafts" },
  { id: "b2", name: "Hummingbird", category: "Birds", habitat: "Tropical gardens", cameraHarness: "Ultra-light dorsal clip", environment: "Flower-rich subtropical canopy" },
  { id: "b3", name: "Owl", category: "Birds", habitat: "Dense forest", cameraHarness: "Head-mount night vision", environment: "Old growth forest with dead trees" },
  { id: "b4", name: "Kingfisher", category: "Birds", habitat: "River banks", cameraHarness: "Waterproof chest cam", environment: "Clear freshwater streams" },
  { id: "b5", name: "Penguin", category: "Birds", habitat: "Antarctic ice", cameraHarness: "Belly-mount waterproof cam", environment: "Ice shelf and sub-zero ocean" },
  { id: "b6", name: "Peregrine Falcon", category: "Birds", habitat: "Urban skyscrapers", cameraHarness: "Streamlined dorsal cam", environment: "City skyline with high-speed dive corridors" },
  { id: "b7", name: "Toucan", category: "Birds", habitat: "Tropical canopy", cameraHarness: "Bill-base micro cam", environment: "Dense Amazon canopy with fruit trees" },
  { id: "b8", name: "Pelican", category: "Birds", habitat: "Coastal waters", cameraHarness: "Pouch-mount waterproof cam", environment: "Warm coastal shallows with fish schools" },
  { id: "b9", name: "Woodpecker", category: "Birds", habitat: "Temperate forest", cameraHarness: "Head-shock micro cam", environment: "Dead tree trunks with insect galleries" },

  // Insects (9)
  { id: "i1", name: "Ant", category: "Insects", habitat: "Underground colony", cameraHarness: "Nano thorax mount", environment: "Subterranean tunnel network" },
  { id: "i2", name: "Spider", category: "Insects", habitat: "Web structures", cameraHarness: "Cephalothorax micro cam", environment: "Garden with silk web architecture" },
  { id: "i3", name: "Dragonfly", category: "Insects", habitat: "Wetlands", cameraHarness: "Thorax clip cam", environment: "Pond surface with reed beds" },
  { id: "i4", name: "Beetle", category: "Insects", habitat: "Forest floor", cameraHarness: "Elytra dorsal mount", environment: "Decaying log ecosystem" },
  { id: "i5", name: "Butterfly", category: "Insects", habitat: "Meadows", cameraHarness: "Wing-base micro sensor", environment: "Wildflower meadow in spring" },
  { id: "i6", name: "Praying Mantis", category: "Insects", habitat: "Garden foliage", cameraHarness: "Head-mount micro cam", environment: "Dense leafy vegetation" },
  { id: "i7", name: "Firefly", category: "Insects", habitat: "Forest clearings", cameraHarness: "Abdomen glow-sync cam", environment: "Summer forest at twilight with bioluminescence" },
  { id: "i8", name: "Honeybee", category: "Insects", habitat: "Hive and meadows", cameraHarness: "Thorax harness nano cam", environment: "Lavender field leading to honeycomb hive" },
  { id: "i9", name: "Scorpion", category: "Insects", habitat: "Desert rocks", cameraHarness: "Carapace UV micro cam", environment: "Arid desert floor under UV moonlight" },

  // Reptiles (9)
  { id: "r1", name: "Chameleon", category: "Reptiles", habitat: "Tropical canopy", cameraHarness: "Dorsal ridge mount", environment: "Madagascar rainforest branches" },
  { id: "r2", name: "Sea Turtle", category: "Reptiles", habitat: "Coral reefs", cameraHarness: "Shell-top waterproof cam", environment: "Tropical reef with seagrass beds" },
  { id: "r3", name: "Gecko", category: "Reptiles", habitat: "Rocky walls", cameraHarness: "Back-mount adhesive cam", environment: "Limestone cliff face at dusk" },
  { id: "r4", name: "Komodo Dragon", category: "Reptiles", habitat: "Island scrubland", cameraHarness: "Neck-collar cam", environment: "Indonesian dry savanna" },
  { id: "r5", name: "Snake", category: "Reptiles", habitat: "Grasslands", cameraHarness: "Head-band micro cam", environment: "Tall grass prairie ecosystem" },
  { id: "r6", name: "Crocodile", category: "Reptiles", habitat: "River deltas", cameraHarness: "Snout-bridge waterproof cam", environment: "Murky river with mangrove roots" },
  { id: "r7", name: "Iguana", category: "Reptiles", habitat: "Volcanic islands", cameraHarness: "Spinal crest mount", environment: "Galápagos lava rock coastline" },
  { id: "r8", name: "Monitor Lizard", category: "Reptiles", habitat: "Tropical woodland", cameraHarness: "Dorsal harness cam", environment: "Southeast Asian jungle floor" },
  { id: "r9", name: "Tortoise", category: "Reptiles", habitat: "Dry scrubland", cameraHarness: "Shell-dome panoramic cam", environment: "Arid grassland with scattered cacti" },

  // Amphibians (8)
  { id: "a1", name: "Frog", category: "Amphibians", habitat: "Swamp", cameraHarness: "Dorsal adhesive micro cam", environment: "Tropical swamp with lily pads" },
  { id: "a2", name: "Salamander", category: "Amphibians", habitat: "Damp caves", cameraHarness: "Back-mount waterproof cam", environment: "Underground cave with streams" },
  { id: "a3", name: "Poison Dart Frog", category: "Amphibians", habitat: "Rainforest floor", cameraHarness: "Nano dorsal mount", environment: "Humid rainforest leaf litter" },
  { id: "a4", name: "Axolotl", category: "Amphibians", habitat: "Lake beds", cameraHarness: "Gill-frame waterproof cam", environment: "Mexican lake with aquatic plants" },
  { id: "a5", name: "Newt", category: "Amphibians", habitat: "Woodland ponds", cameraHarness: "Dorsal micro clip", environment: "Temperate forest pond" },
  { id: "a6", name: "Tree Frog", category: "Amphibians", habitat: "Rainforest canopy", cameraHarness: "Toe-pad adhesive nano cam", environment: "Misty cloud forest with bromeliads" },
  { id: "a7", name: "Caecilian", category: "Amphibians", habitat: "Tropical soil", cameraHarness: "Head-tip burrowing cam", environment: "Moist tropical underground root system" },
  { id: "a8", name: "Fire Salamander", category: "Amphibians", habitat: "European forests", cameraHarness: "Dorsal pattern-mount cam", environment: "Mossy beech forest after rain" },

  // Small Mammals (8)
  { id: "m1", name: "Mouse", category: "Small Mammals", habitat: "Fields", cameraHarness: "Collar micro cam", environment: "Wheat field with burrow network" },
  { id: "m2", name: "Bat", category: "Small Mammals", habitat: "Caves", cameraHarness: "Chest-mount infrared cam", environment: "Limestone cave system at dusk" },
  { id: "m3", name: "Squirrel", category: "Small Mammals", habitat: "Deciduous forest", cameraHarness: "Harness vest cam", environment: "Oak forest canopy in autumn" },
  { id: "m4", name: "Hedgehog", category: "Small Mammals", habitat: "Suburban gardens", cameraHarness: "Spine-mount cam", environment: "English garden at night" },
  { id: "m5", name: "Mole", category: "Small Mammals", habitat: "Underground tunnels", cameraHarness: "Head-mount infrared cam", environment: "Subterranean soil network" },
  { id: "m6", name: "Sugar Glider", category: "Small Mammals", habitat: "Eucalyptus forest", cameraHarness: "Membrane wing-fold cam", environment: "Australian eucalyptus canopy at night" },
  { id: "m7", name: "Chipmunk", category: "Small Mammals", habitat: "Rocky woodland", cameraHarness: "Cheek-pouch collar cam", environment: "Autumn forest floor with acorn caches" },
  { id: "m8", name: "Weasel", category: "Small Mammals", habitat: "Hedgerows", cameraHarness: "Slim torso harness cam", environment: "Dense hedgerow tunnel system" },

  // Marine Animals (9)
  { id: "s1", name: "Crab", category: "Marine Animals", habitat: "Coral reef", cameraHarness: "Carapace top mount", environment: "Tropical coral reef with anemones" },
  { id: "s2", name: "Octopus", category: "Marine Animals", habitat: "Rocky seabed", cameraHarness: "Mantle suction cam", environment: "Deep reef crevice system" },
  { id: "s3", name: "Seahorse", category: "Marine Animals", habitat: "Seagrass beds", cameraHarness: "Dorsal fin micro cam", environment: "Shallow seagrass meadow" },
  { id: "s4", name: "Jellyfish", category: "Marine Animals", habitat: "Open ocean", cameraHarness: "Bell-surface adhesive cam", environment: "Deep blue open water column" },
  { id: "s5", name: "Starfish", category: "Marine Animals", habitat: "Tidal pools", cameraHarness: "Central disc mount", environment: "Rocky intertidal zone" },
  { id: "s6", name: "Manta Ray", category: "Marine Animals", habitat: "Pelagic waters", cameraHarness: "Cephalic fin clip cam", environment: "Open ocean plankton-rich upwelling zone" },
  { id: "s7", name: "Clownfish", category: "Marine Animals", habitat: "Anemone reef", cameraHarness: "Lateral fin nano cam", environment: "Vibrant anemone cluster in warm shallows" },
  { id: "s8", name: "Lobster", category: "Marine Animals", habitat: "Rocky seabed", cameraHarness: "Antennae-base micro cam", environment: "Cold Atlantic rock crevice at night" },
  { id: "s9", name: "Sea Urchin", category: "Marine Animals", habitat: "Kelp forest floor", cameraHarness: "Spine-gap adhesive cam", environment: "Pacific kelp forest with dappled light" },
];