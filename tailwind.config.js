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
                primary: "#FF2400",
                text_primary: "#F2F3F4",
                text_secondary: "#b1b2b3",
                card: "#171721",
                card_light: "#191924",
                button: "#FF2400",
            },
        },
    },
    plugins: [],
}
