# Ochi Clone

## To add fonts to your project :-

1. Download the fonts in your `assets` folder.
2. Add `font-face` to your `index.css` as follows:

    ```css
    @font-face {
        font-family: "foundersgrotesk";
        src: url("/assets/fonts/FOUNDERSGROTESKXCOND-BOLD.OTF");
    }
    @font-face {
        font-family: "neuemontreal";
        src: "/assets/fonts/NeueMontreal-Regular.ttf";
    }
    ```

3. Add the following to your `tailwind.config.js`

    ```js
    export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
        fontFamily: {
            neuemontreal: ["neuemontreal", "sans-serif"],
            foundersgrotesk: ["foundersgrotesk", "sans-serif"],
        },
        },
    },
    plugins: [],
    };
    ```
