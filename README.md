# AI AetherFrame (Next.js + Tailwind)

This project is now built with Next.js App Router and Tailwind CSS.

## Setup

```bash
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator
npm install
```

## Environment Variables

Create a `.env.local` file:

```bash
GOOGLE_API_KEY=your_google_api_key_here
```

The key is used only on the server API route (`app/api/generate-image/route.js`).

## Scripts

- `npm run dev` - start local development server at `http://localhost:3000`
- `npm run build` - create production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Structure

- `app/page.js` - page entry point
- `app/api/generate-image/route.js` - server API endpoint for image generation
- `src/components/image-generator/ImageGeneratorContainer.jsx` - client logic container
- `src/components/image-generator/ImageGeneratorView.jsx` - presentational UI component
- `src/services/imageGeneratorClient.js` - API client service used by container
