import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5',    // indigo-600
        },
        secondary: {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2',    // cyan-600
        },
        accent: {
          DEFAULT: '#f59e42', // orange-400
          dark: '#ea580c',    // orange-600
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          dark: '#0f172a',    // slate-900
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};

export default config; 