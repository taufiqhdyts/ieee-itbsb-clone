/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "organogram-cards-profile": [
          "2px 3px 5px rgba(0, 0, 0, 0.32)",
          "0px 0px 8px rgba(131, 0, 170, 0.38)",
          "0px 0px 23px rgba(255, 255, 255, 0.40)",
        ],
        "vision-mission-carousel": [
          "-4px 0px 10px rgba(131, 0, 170, 1)",
          "0px 0px 10px rgba(131, 0, 170, 1)",
        ],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 60%": { filter: "brightness(100%)" },
          "30%": { filter: "brightness(150%)" },
        },
        flicker: {
          "0%, 40%, 60%": { filter: "brightness(100%)" },
          "30%,50%,70%": { filter: "brightness(150%)" },
        },
      },
      gradientColorStops: {
        "hero-shade-start": "rgba(149, 229, 255, 0.60)",
        "hero-shade-end": "rgba(82, 35, 119, 0.00)",
      },
      animation: {
        blink: "blink 0.5s ease-in-out",
        glow: "glow 3s ease-in-out infinite",
        flicker: "flicker 3s none infinite",
      },
      screens: {
        vsm: "380px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "montserrat-alternates": ["var(--font-montserrat-alternates)"],
        "work-sans": ["var(--font-work-sans)"],
      },
      colors: {
        "primary-1-dark-blue": "#001848",
        "primary-2-very-dark-purple": "#260D3A",
        "primary-3-dark-purple": "#4F0069",
        "secondary-1-purple": "#A164A9",
        "secondary-2-pink": "#F9BED4",
        "secondary-3-pastel-purple": "#A9B5FF",
        "secondary-4-blue": "#6196FE",
        "accent-1-orange": "#F6C57E",
        "accent-2-yellow": "#FFD542",
        "accent-3-pink": "#FC798D",
        "error-red": "#BD1B1B",
        "link-blue": "#060B81",
        "warning-orange": "#FFC806",
        "success-green": "#1B8E27",
        "text-black": "#1B1A1D",
      },
      keyframes: {
        glow : {
          '0%, 60%' :{filter: "brightness(100%)"},
          '30%' :{filter: "brightness(150%)"},
        },
        flicker : {
          '0%, 40%, 60%' :{filter: "brightness(100%)"},
          '30%,50%,70%' :{filter: "brightness(150%)"},
        },
        gridIn :{
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroShadeIn1 :{
          "0%": { opacity: "0" },
          "100%": { opacity: "0,5" },
        },
        heroShadeIn2 :{
          "0%": { opacity: "0" },
          "100%": { opacity: "0,75" },
        },
        heroShadeIn3 :{
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        // Animasi Text IEEE
        IEEEText1Def :{
          "50%": { top: "calc(100vw * 311.41 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 2 / 1440)" },
        },
        IEEEText1sm :{
          "50%": { top: "calc(100vw * 311.41 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 1.5 / 1440)" },
        },
        IEEEText1md :{
          "50%": { top: "calc(100vw * 311.41 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 * 1.2 / 1440)" },
        },
        IEEEText1lg :{
          "50%": { top: "calc(100vw * 311.41 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 321.41 / 1440)" },
        },

        IEEEText2Def :{
          "50%": { top: "calc(100vw * 255.31 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 2 / 1440)" },
        },
        IEEEText2sm :{
          "50%": { top: "calc(100vw * 255.31 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 1.5 / 1440)" },
        },
        IEEEText2md :{
          "50%": { top: "calc(100vw * 255.31 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 * 1.2 / 1440)" },
        },
        IEEEText2lg :{
          "50%": { top: "calc(100vw * 255.31 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 265.31 / 1440)" },
        },

        IEEEText3Def :{
          "50%": { top: "calc(100vw * 296.09 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 2 / 1440)" },
        },
        IEEEText2sm :{
          "50%": { top: "calc(100vw * 296.09 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 1.5 / 1440)" },
        },
        IEEEText3md :{
          "50%": { top: "calc(100vw * 296.09 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 * 1.2 / 1440)" },
        },
        IEEEText3lg :{
          "50%": { top: "calc(100vw * 296.09 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 306.09 / 1440)" },
        },

        IEEEText4Def :{
          "50%": { top: "calc(100vw * 243 * 2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 2 / 1440)" },
        },
        IEEEText4sm :{
          "50%": { top: "calc(100vw * 243 * 1.5 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 1.5 / 1440)" },
        },
        IEEEText4md :{
          "50%": { top: "calc(100vw * 243 * 1.2 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 * 1.2 / 1440)" },
        },
        IEEEText4lg :{
          "50%": { top: "calc(100vw * 243 / 1440)" },
          "0% ,100%": { top: "calc(100vw * 253 / 1440)" },
        },
      },
      animation:{
        'glow' : 'glow 2s ease-in-out infinite',
        'flicker' : 'flicker 2s none infinite',
        'gridIn' : 'gridIn 2s ease-in-out',
        'heroShadeIn1' : 'heroShadeIn1 2s ease-in',
        'heroShadeIn2' : 'heroShadeIn2 2s ease-in',
        'heroShadeIn3' : 'heroShadeIn3 2s ease-in',

        'IEEEText1Def' : 'IEEEText1Def 2s ease-in infinite',
        'IEEEText1sm' : 'IEEEText1sm 2s ease-in infinite',
        'IEEEText1md' : 'IEEEText1md 2s ease-in infinite',
        'IEEEText1lg' : 'IEEEText1lg 2s ease-in infinite',

        'IEEEText2Def' : 'IEEEText2Def 2s ease-in infinite',
        'IEEEText2sm' : 'IEEEText2sm 2s ease-in infinite',
        'IEEEText2md' : 'IEEEText2md 2s ease-in infinite',
        'IEEEText2lg' : 'IEEEText2lg 2s ease-in infinite',

        'IEEEText3Def' : 'IEEEText3Def 2s ease-in infinite',
        'IEEEText3sm' : 'IEEEText2sm 2s ease-in infinite',
        'IEEEText3md' : 'IEEEText3md 2s ease-in infinite',
        'IEEEText3lg' : 'IEEEText3lg 2s ease-in infinite',

        'IEEEText4Def' : 'IEEEText4Def 2s ease-in infinite',
        'IEEEText4sm' : 'IEEEText4sm 2s ease-in infinite',
        'IEEEText4md' : 'IEEEText4md 2s ease-in infinite',
        'IEEEText4lg' : 'IEEEText4lg 2s ease-in infinite',
      },
    },
  },
  plugins: [],
};
