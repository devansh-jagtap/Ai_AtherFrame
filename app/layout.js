import "./globals.css";

export const metadata = {
  title: "AI AetherFrame",
  description: "Generate images from prompts with Gemini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
