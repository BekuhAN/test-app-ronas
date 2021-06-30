<template>
  <div class="weather">
    <div class="weather__temp">
      <div class="weather__temp__icon">
        <img :src="getImgUrl(data.weather[0].main)" />
      </div>
      <div class="weather__temp__value" v-if="getActiveUnits == 'metric'">
        {{ Math.round(data.main.temp) }}&deg;
      </div>
      <div class="weather__temp__value" v-if="getActiveUnits == 'imperial'">
        {{ data.main.temp | far }}&deg;
      </div>
    </div>
    <div class="weather__description">
      {{ data.weather[0].description | capitalize }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  methods: {
    getImgUrl(image) {
      return require("../assets/" + image + ".png");
    },
  },
  computed: {
    ...mapGetters(["getActiveUnits"]),
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
    line-height: 1;
    &__icon {
      width: 180px;
      height: 180px;
      img {
        height: 100%;
      }
    }
  }
  &__description {
    font-size: 25px;
  }
}

@media (max-width: 575px) {
    .weather {
        &__temp {
          font-size: 120px;
          &__icon {
            width: 130px;
            height: 130px;
          }
        }
        &__description {
          font-size: 22px;
        }
    }
}
</style>
