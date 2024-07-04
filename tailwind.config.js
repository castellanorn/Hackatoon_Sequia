

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inria Sans', 'sans-serif'],
        'serif': ['Bree Serif', 'serif'],
      },
      colors: {
        'body': 'var(--col-body)',
        'navbar': 'var(--col-navbar)',
        'footer': 'var(--col-footer)',
        'button': 'var(--col-button)',
        'logo-text': 'var(--col-logo-text)',
        'text': 'var(--col-text)',
      },
    },
  },
  plugins: [],
}


