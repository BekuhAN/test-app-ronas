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
        q: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getActiveCity", "getGeolocation", "getActiveUnits"]),
  },
  methods: {
    ...mapActions(["changeActiveCity", "loadWeather", "loadGeolocation"]),
    showChange() {
      this.isChangeCity = !this.isChangeCity;
    },
    saveActiveCity() {
      if (this.params.q) {
        this.changeActiveCity(this.params.q);
        this.loadWeather(this.params);
        this.showChange();
      } else {
        alert("Введите название города!");
      }
    },
    fetchData() {
      this.params.q = this.getActiveCity;
    },
    async setGeolocation() {
      await this.loadGeolocation();
      this.changeActiveCity(this.getGeolocation.city);
      this.fetchData();
      this.loadWeather(this.params);
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
  min-height: 91px;
  &__city {
    font-size: 50px;
    line-height: 1;
    margin-bottom: 20px;
    overflow: hidden;
  }
  &__btns {
    display: flex;
    align-items: center;
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
    z-index: 10;
    &__city {
      color: #000;
      border: none;
      font-size: 30px;
      &:focus {
        border: none;
        outline: none;
      }
    }
    &__btn {
      background: none;
      color: #1086ff;
      font-size: 30px;
      border: none;
      text-transform: uppercase;
    }
  }
}
@media (max-width: 575px) {
  .search {
    &__city {
        font-size: 30px;
        width: 240px;
    }
    &__btns {
      &__item {
        font-size: 15px;
      }
    }
    &__change {
      width: calc(100% - 30px);
      margin: 0px 15px;
      padding: 20px;
      &__city {
          font-size: 22px;
          width: 240px;
      }
      &__btn {
          font-size: 22px;
      }
    }
  }
}
</style>
