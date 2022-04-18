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
