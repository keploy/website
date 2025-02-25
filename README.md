# Getting Started

1. **Ensure Node.js 18.x.x is installed** on your machine.
2. **Install the ESLint extension** for VS Code:
   - You can install the [ESLint extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
   
3. **Configure asset prefix for local developement**:
   - **For local development**, comment out the below line to load assets locally.
     - In `next.config.js`, the assetPrefix ensures proper asset loading from the new landing page.
       ```js
       assetPrefix: 'https://keploy-websites.vercel.app'
       ```

4. **Running the development server**:
   - Use one of the following commands based on your package manager:
     ```bash
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     ```
     
5. **Run ESLint**:
   - To identify and fix linting issues, run:
     ```bash
     npx eslint .
     ```
     Make sure to resolve any linting issues before raising a PR.

6. **Access the app**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

> **Note:** This template is inspired by the [Cruip Tailwind Landing Page Template](https://github.com/cruip/tailwind-landing-page-template).

## Brand color Palette

---

This README guide provides an overview of the color palette used in the project, along with their respective purposes and usage.

| Color Name   | Purpose                                   | Color Patch                                                 | Hash Value |
|--------------|-------------------------------------------|------------------------------------------------------------|------------|
| Primary Color| Primary headings, primary buttons, main elements | ![#FF914D](https://via.placeholder.com/20/FF914D?text=+) | `#FF914D` |
| Secondary Color | Backgrounds, borders, subtle accents  | ![#00163D](https://via.placeholder.com/20/00163D?text=+)   | `#00163D` |
| Neutral Colors | Backgrounds, borders, subtle accents | ![#F5F5F5](https://via.placeholder.com/20/F5F5F5?text=+) <br> ![#FFF](https://via.placeholder.com/20/FFF?text=+) <br> ![#E6E2D4](https://via.placeholder.com/20/E6E2D4?text=+) | `#F5F5F5` <br> `#FFF` <br> `#E6E2D4` |
| Accent Colors | Success messages, notifications, progress indicators | ![#16704C](https://via.placeholder.com/20/16704C?text=+) | `#16704C` |
|               | Highlights, icons, creative sections | ![#5F3131](https://via.placeholder.com/20/5F3131?text=+)   | `#5F3131` |
|               | Attention-grabbing elements, notifications, important highlights | ![#EF546B](https://via.placeholder.com/20/EF546B?text=+) <br> ![#D9CD9C](https://via.placeholder.com/20/D9CD9C?text=+) | `#EF546B` <br> `#D9CD9C` |
| Gradient Colors | - | ![#F5F5F5](https://via.placeholder.com/20/F5F5F5?text=+) <br> ![#E35134](https://via.placeholder.com/20/E35134?text=+) <br> ![#FF914D](https://via.placeholder.com/20/FF914D?text=+) <br> ![#BE2C1B](https://via.placeholder.com/20/BE2C1B?text=+) <br> ![#6F0A0D](https://via.placeholder.com/20/6F0A0D?text=+) | `#F5F5F5` <br> `#E35134` <br> `#FF914D` <br> `#BE2C1B` <br> `#6F0A0D` |

This README guide provides a quick reference to the colors in the palette and their intended purposes. Use this guide to ensure consistent usage of colors throughout the project and to maintain a cohesive visual style.

Feel free to discuss and customize the README guide further based on your project requirements and additional details you'd like to include.

---


Created and maintained with ❤️ by [Keploy.io](https://keploy.io/).

