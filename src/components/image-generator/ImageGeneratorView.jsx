"use client";

import Image from "next/image";

export default function ImageGeneratorView({
  prompt,
  onPromptChange,
  onGenerate,
  isLoading,
  imageUrl,
  error,
}) {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-8">
      <h1 className="text-center text-5xl font-semibold md:text-6xl">
        Ai <span className="font-semibold text-blue-700">AetherFrame</span>
      </h1>

      <div className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-6">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white md:aspect-[4/3]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Generated image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized
            />
          ) : (
            <Image
              src="/assets/waves.webp"
              alt="Waves placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          )}
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 rounded-full bg-slate-900 p-3 md:flex-row md:items-center">
        <input
          type="text"
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder="Describe What You Are Thinking"
          className="h-12 w-full rounded-full border border-transparent bg-transparent px-5 text-base text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={onGenerate}
          disabled={isLoading}
          className="h-12 rounded-full bg-blue-700 px-8 text-base font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
