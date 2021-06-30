<template>
  <div class="search">
    <div class="search__city">{{ params.q }}</div>
    <div class="search__btns">
      <button class="search__btns__item" @click="showChange">
        Сменить город
      </button>
      <button class="search__btns__item" @click="setGeolocation">
        <font-awesome-icon icon="location-arrow" /> Мое местоположение
      </button>
    </div>
    <div class="search__change" v-if="isChangeCity">
      <input
        class="search__change__city"
        type="text"
        required
        v-model="params.q"
      />
      <button class="search__change__btn" @click="saveActiveCity">Ок</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isChangeCity: false,
      params: {
        units: "metric",
        q: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getActiveCity", "getGeolocation"]),
  },
  methods: {
    ...mapActions(["changeActiveCity", "loadWeather", "loadGeolocation"]),
    showChange() {
      this.isChangeCity = !this.isChangeCity;
    },
    saveActiveCity() {
      this.changeActiveCity(this.params.q);
      this.loadWeather(this.params);
      this.showChange();
    },
    fetchData() {
      this.params.q = this.getActiveCity;
    },
    async setGeolocation() {
      await this.loadGeolocation();
      this.loadWeather(this.params);
      this.changeActiveCity(this.getGeolocation.city);
      this.fetchData();
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
.search {
  position: relative;
  &__city {
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 10px;
  }
  &__btns {
    display: flex;
    &__item {
      margin-right: 25px;
      padding: 0;
      opacity: 0.6;
      transition: 0.2s;
      background: none;
      border: none;
      font-size: 18px;
      &:hover {
        opacity: 1;
      }
    }
  }
  &__change {
    position: absolute;
    left: 0%;
    top: 0%;
    bottom: 0%;
    width: 600px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    &__city {
      color: #000;
      border: none;
      font-size: 30px;
      line-height: 36px;
      &:focus {
        border: none;
        outline: none;
      }
    }
    &__btn {
      background: none;
      color: #1086ff;
      font-size: 30px;
      line-height: 36px;
      border: none;
      text-transform: uppercase;
    }
  }
}
</style>
