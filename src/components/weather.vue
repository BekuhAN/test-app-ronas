<template>
  <div>{{ data.weather[0].description }} {{ data.main.temp }}</div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>
