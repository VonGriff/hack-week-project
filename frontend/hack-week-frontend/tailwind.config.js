/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['coffee', 'dark','halloween', 'forest','luxury','business','night', 'dim', 'sunset']
  }
}

