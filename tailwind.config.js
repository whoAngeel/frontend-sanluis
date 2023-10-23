/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: { 'sans': 'Montserrat, Arial, sans-serif' }
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography')],
    daisyui: {
        themes: ["light", "dark", "corporate", {
            "sanluis": {

                "primary": "#321fad",

                "secondary": "#ffccf1",

                "accent": "#d6722a",

                "neutral": "#231825",

                "base-100": "#f3f3f7",

                "info": "#8ec3e1",

                "success": "#25e488",

                "warning": "#e8b021",

                "error": "#e56f5d",
            },
        },],
    }
}
