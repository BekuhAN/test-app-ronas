<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "value"],
};
</script>

<style lang="scss">
.title {
  font-size: 18px;
  opacity: 0.6;
  margin-bottom: 10px;
}

.value {
  font-size: 25px;
  margin-bottom: 30px;
}
@media (max-width: 575px) {
  .title {
    font-size: 15px;
  }

  .value {
    font-size: 18px;
  }
}
</style>
