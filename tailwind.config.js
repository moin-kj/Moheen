/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["VAG-Rounded","Verdana", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        HeadingText: "#253778",
        buttoncolor: "#1854a2",
        buttonhovercolor: "#008bff",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#4db33d",
        borderColor: "#253778",
        inputColor: "#333",
        githubColor: "#333",
        linkedIncolor: "#0A66C2",
        gmailColor: "#c71610",
        nodejsColor: "#215732",
        reactColor: "#61DBFB",
        skillsColor: "#FFFFFF",
        htmlColor: "	#FF0000",
        CssColor: "#264de4",
        JsColor: "#f0db4f",
        SqlColor: "#e34c26",
        CsharpColor: "#682876",
        pythonColor:"#4B8BBE",
        dsaColor: "#e34c26"

      },
    },
  },
  plugins: [],
}

