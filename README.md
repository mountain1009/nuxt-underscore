 <h1>underscore for Nuxt</h1>

I referred to [here](https://github.com/cipami/nuxt-lodash)) for the configuration

<p>
  <a href="https://www.npmjs.com/package/nuxt-underscore"><img src="https://badgen.net/npm/v/nuxt-underscore" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt-underscore"><img src="https://badgen.net/npm/license/nuxt-underscore" alt="License"></a>
  <a href="https://www.npmjs.com/package/nuxt-underscore"><img src="https://badgen.net/npm/types/nuxt-underscore" alt="Types"></a>
</p>

## 💡 About

[underscorejs](https://underscorejs.org/) auto-import module for [Nuxt](https://nuxtjs.org).

## 📦 Install

1. Install `nuxt-underscore` as development dependency:

```bash
npm i nuxt-underscore -D
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: ["nuxt-underscore"],
});
```

## 🚀 Example

Use any [underscore](https://underscore.com) methods in your Nuxt application, they will be auto-imported!

```html
<template>
  <div>{{ text }}</div>
</template>
<script setup>
  const list = [
    { age: 20, sex: "male", country: "JP", name: "hoge" },
    { age: 22, sex: "male", country: "US", name: "fuga" },
    { age: 20, sex: "female", country: "US", name: "piyo" },
    { age: 45, sex: "male", country: "JP", name: "HUGA" },
    { age: 20, sex: "female", country: "JP", name: "HOGE" },
  ];
  const text = useFindWhere(list, { age: 20, country: "JP" });
</script>
```

## 🔨 Config

| Name         | Default  | Description                                                                          |
| ------------ | -------- | ------------------------------------------------------------------------------------ |
| `prefix`     | `'use'`  | String to prepend before each underscore function (false to disable)                 |
| `prefixSkip` | `['is']` | Functions that starts with keywords in this array will be skipped by prefix          |
| `exclude`    | `[]`     | Array of underscore functions to exlude from auto-imports                            |
| `alias`      | `[]`     | Array of array pairs to rename specific underscore functions (prefix is still added) |

## 💻 Example - Config

```ts
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: ["nuxt-underscore"],
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
```
