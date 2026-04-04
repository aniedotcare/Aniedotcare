module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: '#A8B8A2',
        sand: '#EAE2D9',
        rust: '#B98B73',
        cream: '#FBF9F6',
        charcoal: '#3D403D',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
