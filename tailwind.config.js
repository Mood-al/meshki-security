/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D1A',
          900: '#0A1628',
          800: '#0F2240',
          700: '#162D57',
          600: '#1E3D73',
          500: '#2550A0',
        },
        steel: {
          900: '#111827',
          700: '#374151',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50:  '#F9FAFB',
        },
        gold: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#C8973E',
        },
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0F2240 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1628 0%, #162D57 100%)',
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.04), 0 20px 40px rgba(0,0,0,0.12)',
        'navy':       '0 8px 32px rgba(10,22,40,0.35)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
