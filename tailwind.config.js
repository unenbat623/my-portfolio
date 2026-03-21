/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#090917",
                bgLight: "#1C1E27",
                primary: "#818cf8",
                text_primary: "#F2F3F4",
                text_secondary: "#b1b2b3",
                card: "#171721",
                card_light: "#191924",
                button: "#818cf8",
                // Accent gradient tokens
                accent_start: "#818cf8",
                accent_mid: "#60a5fa",
                accent_end: "#34d399",
            },
        },
    },
    plugins: [],
}
