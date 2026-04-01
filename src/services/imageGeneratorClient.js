export async function generateImageFromPrompt(prompt) {
  const response = await fetch("/api/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || "Image generation failed.");
  }

  return payload.imageUrl;
}
