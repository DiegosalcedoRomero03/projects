/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #3b82f6, #2563eb)',
        'gradient-accent-hover': 'linear-gradient(90deg, #2563eb, #1d4ed8)',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
        'gradient-text': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
}
