/** @type {import('tailwindcss').Config} */
module.exports = {
  /* 
  tailwind와 mui의 충돌을 막기 위해 추가 
  대신 이러면 tailwind 문법 쓸 때 앞에 tw-를 붙여야한다.
  */
  corePlugins: {
    preflight: false,
  },
  important: true,
  prefix: 'tw-',
  /* 여기까지 */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
