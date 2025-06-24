# MediCare Hospital Website

A modern, responsive hospital website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Component-based architecture
- Easy-to-update content with JSON data files
- Optimized for performance and SEO

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hospital-website.git
   cd hospital-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
hospital-website/
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components
│   ├── data/                 # JSON data files
│   ├── pages/                # Next.js pages
│   └── styles/               # Global styles
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Customization

### Update Content

- **Services**: Edit `src/data/services.json`
- **Doctors**: Edit `src/data/doctors.json`
- **Testimonials**: Edit `src/data/testimonials.json`

### Styling

- **Colors**: Update the color palette in `tailwind.config.js`
- **Global Styles**: Modify `src/styles/globals.css`

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import your project on Vercel
3. Vercel will automatically detect it's a Next.js app and set up the build settings

### Other Hosting Providers

1. Build your app: `npm run build`
2. Export as static site: `npm run export`
3. Deploy the `out` folder to your hosting provider

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
