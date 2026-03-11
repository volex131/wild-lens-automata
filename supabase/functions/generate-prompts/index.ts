import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const { animal, style } = await req.json();

    const prompt = `You are a wildlife documentary AI prompt engineer. Generate exactly 6 prompt blocks for a POV wildlife documentary video.

Animal: ${animal.name}
Category: ${animal.category}
Habitat: ${animal.habitat}
Camera: ${animal.cameraHarness}
Environment: ${animal.environment}
Style: ${style}

Generate the following blocks:
- Block 01: An IMAGE prompt for the opening frame. Ultra-realistic macro wildlife photography style.
- Block 02-06: Five MOTION prompts, each describing an 8-second video clip from the animal's POV perspective. Include camera movement, lighting, environment details.

Return ONLY valid JSON in this exact format:
{"prompts":[{"blockNumber":1,"type":"image","prompt":"..."},{"blockNumber":2,"type":"motion","prompt":"..."},{"blockNumber":3,"type":"motion","prompt":"..."},{"blockNumber":4,"type":"motion","prompt":"..."},{"blockNumber":5,"type":"motion","prompt":"..."},{"blockNumber":6,"type":"motion","prompt":"..."}]}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 2048 },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    // Extract JSON from response (may be wrapped in markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Failed to parse Gemini response as JSON");
    
    const parsed = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-prompts error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});