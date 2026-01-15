import { defineConfig } from "astro/config";

// IMPORTANT (GitHub Pages):
// - Replace <YOUR_GITHUB_USER> with your GitHub username.
// - Replace /odins-vault/ if your repository name is different.
export default defineConfig({
  site: "https://fromoopstoops.github.io",
  base: "/odins-vault/",
  output: "static"
});
