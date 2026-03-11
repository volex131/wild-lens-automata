

# Wildlife POV Video Factory — Control Room Dashboard

## Design
Dark control room aesthetic per the design brief: `IBM Plex Sans` / `IBM Plex Mono`, dark slate background (`hsl(240 5% 6%)`), amber for processing, emerald for completion. No borders — layered shadows for depth.

## Pages & Layout

### Main Dashboard (`/`)
- **Header**: "Wildlife POV Factory" title + system status indicator
- **Left Panel (Config)**: Animal selector (searchable dropdown with 30+ animals across 6 categories), style selector, batch size slider (1-20), action buttons
- **Right Panel (Pipeline Monitor)**: 5-step progress indicator (Prompts → Images → Video → Assembly → Metadata), terminal-style log output with live updates

### Animal Database Page (`/animals`)
- Filterable grid of animals with name, category, habitat, camera harness type, environment
- Add/edit animals (local state)

## AI-Powered Modules (via Lovable Cloud Edge Functions + Gemini API)

### Module 1 — Idea Generation
Edge function calls Gemini to generate 50 wildlife POV video ideas per batch. Results displayed in a scrollable list with select/reject.

### Module 3 — Prompt Engine  
User selects animal → edge function sends to Gemini → returns 6 structured prompt blocks (1 image + 5 motion). Displayed in formatted cards.

### Module 7 — YouTube Metadata Generator
After pipeline completes, Gemini generates title, description, 15 hashtags, SEO keywords. Copyable output cards.

## Simulated Pipeline Modules (UI only, ready for real API integration)

### Modules 4 & 5 — Image & Video Generation
Pipeline stages shown with progress indicators. Mock delays simulate API calls. Architecture ready to plug in real Stable Diffusion / Runway APIs later.

### Module 6 — Video Assembly
Simulated FFmpeg stitching stage with log output.

## Bulk Mode (Module 8)
Queue multiple jobs (5/10/20 videos). Job queue displayed as a list with per-job status tracking.

## Export System (Module 10)
Download button for generated metadata/prompts as JSON. File naming: `animal_name_pov_video_timestamp.json`

## Backend
- Lovable Cloud edge function `generate-prompts` — calls Gemini for prompt generation
- Lovable Cloud edge function `generate-ideas` — calls Gemini for idea generation  
- Lovable Cloud edge function `generate-metadata` — calls Gemini for YouTube metadata
- User's Gemini API key stored securely via Lovable secrets

