<template>
  <div
    id="app"
    :class="getWeather ? getWeather.weather[0].main.toLowerCase() : ''"
  >
    <header class="header">
      <div class="container">
        <div class="row">
          <Search class="header__item col-sm-10 col-12" />
          <Units class="header__item col-sm-2 col-12" />
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <Weather v-if="getWeather" :data="getWeather" />
      </div>
    </main>
    <footer>
      <div class="container">
        <Details v-if="getWeather" :data="getWeather" />
      </div>
    </footer>
  </div>
</template>

<script>
import Search from "./components/search.vue";
import Units from "./components/units.vue";
import Details from "./components/details.vue";
import Weather from "./components/weather.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      params: {
        q: "Краснодар",
      },
    };
  },
  computed: {
    ...mapGetters(["getWeather", "getLoad"]),
  },
  async beforeMount() {
    await this.loadWeather(this.params);
    console.log(this.getWeather);
  },
  methods: {
    ...mapActions(["loadWeather"]),
  },
  components: {
    Search,
    Units,
    Details,
    Weather,
  },
};
</script>

<style lang="scss">
* {
  color: inherit;
  line-height: 1;
}

#app {
  font-family: LatoRegular;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #498cec;
  &.clear,
  &.clouds {
    background: #498cec;
  }
  &.thunderstorm,
  &.rain {
    background: #7290b9;
  }
  .header {
    position: relative;
  }
}
</style>
