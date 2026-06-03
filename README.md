# Jony Gautam - Personal Portfolio

A modern, responsive, and production-ready personal portfolio website built with Next.js (App Router), Tailwind CSS, Framer Motion, and TypeScript. 

## 🚀 Features

- **Next.js App Router**: Utilizing the latest features for fast tracking and server/client components.
- **Tailwind CSS**: Sleek, modern, and highly responsive dark-themed styling.
- **Framer Motion**: Smooth entry and scroll animations for an engaging UI.
- **TypeScript**: Fully typed for better developer experience and reduced bugs.
- **Mobile First**: Fully responsive across devices from mobile to large desktop screens.

## 📁 Folder Structure

```
portfolio/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout, fonts, and metadata
│   │   └── page.tsx        # Main entry page assembling components
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/                # Shared utilities
│       └── utils.ts        # Tailwind merge & clsx utility (`cn`)
├── .gitignore
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration with custom scales and colors
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Local Development

1. **Install dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

Vercel is the easiest way to deploy your Next.js app.

1. **Push your code to GitHub**: 
   Create a new repository on GitHub and push your local files to it.

2. **Connect to Vercel**:
   - Go to [Vercel.com](https://vercel.com/) and sign in.
   - Click on **"Add New"** > **"Project"**.
   - Import your GitHub repository.

3. **Configure Project**:
   Vercel will automatically detect that it's a Next.js project. You don't need to change any build settings. 
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`

4. **Deploy**:
   Click the **"Deploy"** button. Your app will be live on a Vercel subdomain within minutes!
