"use client";

import { useState } from "react";
import ImageGeneratorView from "./ImageGeneratorView";
import { generateImageFromPrompt } from "@/src/services/imageGeneratorClient";

export default function ImageGeneratorContainer() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      setError("Please enter a prompt.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const generatedImageUrl = await generateImageFromPrompt(trimmedPrompt);
      setImageUrl(generatedImageUrl);
    } catch (requestError) {
      setError(requestError.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageGeneratorView
      prompt={prompt}
      onPromptChange={setPrompt}
      onGenerate={handleGenerate}
      isLoading={isLoading}
      imageUrl={imageUrl}
      error={error}
    />
  );
}
