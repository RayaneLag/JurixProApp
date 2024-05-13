const {
  default: flattenColorPalette,
  // eslint-disable-next-line no-undef
} = require("tailwindcss/lib/util/flattenColorPalette");

const path = require("path");

const uiPath = path.resolve(
  require.resolve("@medusajs/ui"),
  "../..",
  "*_/_.{js,jsx,ts,tsx}"
);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    uiPath,

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  presets: [require("@medusajs/ui-preset")],
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
