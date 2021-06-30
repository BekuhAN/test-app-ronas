<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="row">
          <Search class="header__item col-6" />
          <Units class="header__item col-6" />
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <Weather :data="getWeather" />
      </div>
    </main>
    <footer>
      <div class="container">
        <Details />
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
        units: "metric",
        q: "Краснодар",
      },
    };
  },
  computed: {
    ...mapGetters(["getWeather"]),
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["loadWeather"]),
    async fetchData() {
      await this.loadWeather(this.params);
    },
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
}

#app {
  font-family: LatoRegular;
  background: #498cec;
  color: #ffffff;
  position: fixed;
  padding: 75px 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // .header {
  //   display: flex;
  //   // &__item {
  //   //   flex: 0 0 50%;
  //   // }
  // }
}
</style>
