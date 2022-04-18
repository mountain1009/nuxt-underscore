import { defineNuxtModule } from "@nuxt/kit";
import * as underscore from "underscore";
import exculdeDefaults from "./exclude";

export interface ModuleOptions {
  /**
   * Prefix to be added before every underscore function.
   * False to disable prefix
   *
   * @defaultValue `use`
   */
  prefix?: false | string;
  /**
   * Functions that starts with keywords in this array will be skipped by prefix

   * @defaultValue ['is']
   */
  prefixSkip?: string[];
  /**
   * Array of underscore funcions to be exluded from auto-imports
   *
   * @defaultValue []
   */
  exclude?: string[];
  /**
   * Iterable of string pairs to alias each function
   *
   * @defaultValue []
   */
  alias?: Iterable<[string, string]>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-underscore",
    configKey: "underscore",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    prefix: "use",
    prefixSkip: ["is"],
    exclude: [],
    alias: [],
  },
  setup(options, nuxt) {
    const imports = [];
    const prefix = options.prefix || "";
    const aliasMap = new Map(options.alias);
    const exludes = [...options.exclude, ...exculdeDefaults];

    for (const [name] of Object.entries(underscore)) {
      if (!exludes.includes(name)) {
        const alias = aliasMap.has(name) ? aliasMap.get(name) : name;
        const as = (() => {
          const isPrefix =
            !options.prefixSkip.some((key) => alias.startsWith(key)) && prefix;

          return isPrefix
            ? prefix +
                alias.replace(/^[a-z]/g, function (val) {
                  return val.toUpperCase();
                })
            : alias;
        })();
        imports.push({ name, as });
      }
    }

    nuxt.hook("vite:extend", ({ config }) => {
      config.optimizeDeps ||= {};
      config.optimizeDeps.exclude ||= [];
      config.optimizeDeps.exclude.push("underscore");
    });

    nuxt.hook("autoImports:sources", (sources) => {
      if (!sources.some((i) => i.from === "underscore")) {
        sources.push({ imports, from: "underscore" });
      }
    });
  },
});
