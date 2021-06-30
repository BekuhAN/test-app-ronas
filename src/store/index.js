import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: [],
    activeUnits: "Celsius",
    activeCity: "Краснодар",
    geolocation: [],
  },
  getters: {
    getWeather(state) {
      return state.weather;
    },
    getActiveCity(state) {
      return state.activeCity;
    },
    getGeolocation(state) {
      return state.geolocation;
    },
  },
  mutations: {
    updateWeather(state, payload) {
      state.weather = payload;
    },
    updateActiveCity(state, payload) {
      state.activeCity = payload;
    },
    updateGeolocation(state, payload) {
      state.geolocation = payload;
    },
  },
  actions: {
    async loadWeather({ commit }, params) {
      const result = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?appid=7e591edc229e805cb3a6d42218901ae9&lang=ru",
        { params }
      );
      commit("updateWeather", result.data);
    },
    async loadGeolocation({ commit }) {
      const result = await axios.get("http://ip-api.com/json?lang=ru");
      commit("updateGeolocation", result.data);
    },
    changeActiveCity({ commit }, city) {
      commit("updateActiveCity", city);
    },
  },
});
