/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',  // أو 'class' لو عايز الطريقة القديمة، 'selector' أحدث وأفضل

  content: [
    "./index.html",           // الصفحة الرئيسية
    "./*.html",               // أي .html تاني في نفس المجلد
    "./**/*.html",            // لو في فولدرات فرعية (assets, sections...)
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        outfit: ['outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },
      animation: {
        spin: 'spin 6s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        lightHover: '#f0f0f0',
        darkHover: '#2a2a84',
        darkTheme: '#11001F',
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',  // لو أضفته
      },
    },
  },
  plugins: [],
}