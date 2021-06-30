<template>
  <div class="weather">
    <div class="weather__temp">
      <div class="weather__temp__icon">
        <img :src="getImgUrl(data.weather[0].main)" />
      </div>
      <div class="weather__temp__value">
        {{ Math.round(data.main.temp) }}&deg;
      </div>
    </div>
    <div class="weather__description">
      {{ data.weather[0].description | capitalize }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    getImgUrl(image) {
      return require("../assets/" + image + ".png");
    },
  },
};
</script>

<style lang="scss">
.weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__temp {
    font-size: 180px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &__icon {
      width: 200px;
      height: 200px;
      img {
        height: 100%;
      }
    }
  }
  &__description {
    font-size: 25px;
  }
}
</style>
