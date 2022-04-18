import { defineNuxtConfig } from "nuxt3";
import nuxtUnderScore from "..";

export default defineNuxtConfig({
  buildModules: [nuxtUnderScore],
  underscore: {
    prefix: "use",
    prefixSkip: ["is"],
    exclude: ["map"],
    alias: [
      ["first", "saisho"], // => useSaisho
      ["last", "saigo"], // => useSaigo
    ],
  },
});
