import { GoogleGenAI, Modality } from "@google/genai";

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return Response.json({ error: "Prompt is required." }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Server API key is missing. Set GOOGLE_API_KEY in .env." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: prompt.trim(),
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    const imagePart = response?.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData?.data
    );

    if (!imagePart?.inlineData?.data) {
      return Response.json(
        { error: "No image data received from model." },
        { status: 502 }
      );
    }

    return Response.json({
      imageUrl: `data:image/png;base64,${imagePart.inlineData.data}`,
    });
  } catch (error) {
    return Response.json(
      { error: error?.message || "Failed to generate image." },
      { status: 500 }
    );
  }
}
