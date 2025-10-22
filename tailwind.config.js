/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chockleti: '#3A1F1A',
        sandyGold: '#FFD700',
      },
      animation: {
        bgGoldenPulse: 'bgGoldenPulse 12s ease infinite',
        goldenBounce: 'goldenBounce 3s ease-in-out infinite',
      },
      keyframes: {
        bgGoldenPulse: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 50%', opacity: 0.9 },
          '100%': { backgroundPosition: '0% 0%', opacity: 1 },
        },
        goldenBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateZ(20px) translateY(0) scale(1)' },
          '50%': { transform: 'translateX(-50%) translateZ(20px) translateY(-20px) scale(1.2)' },
        },
      },
      boxShadow: {
        golden: '0 0 20px #FFD700, 0 0 10px #FFFFFF',
      },
    },
  },
  plugins: [],
}
