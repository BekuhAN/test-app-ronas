<template>
  <div class="units">
    <div class="units__icon">&deg;</div>
    <div class="units__list">
      <div
        :class="{ active: getActiveUnits == 'metric' }"
        class="units__list__item left"
        @click="setActiveUnits('metric')"
      >
        C
      </div>
      <div
        :class="{ active: getActiveUnits == 'imperial' }"
        class="units__list__item right"
        @click="setActiveUnits('imperial')"
      >
        F
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      params: {
        units: "",
        q: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getActiveUnits", "getActiveCity"]),
  },
  methods: {
    ...mapActions(["changeActiveUnits", "loadWeather"]),
    setActiveUnits(unit) {
      this.changeActiveUnits(unit);
      this.params.units = this.getActiveUnits;
      this.params.q = this.getActiveCity;
      this.loadWeather(this.params);
    },
  },
  beforeMount() {
    this.params.units = this.getActiveUnits;
    this.params.q = this.getActiveCity;
  },
};
</script>

<style lang="scss">
.units {
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  &__icon {
    opacity: 0.4;
    margin-right: 10px;
  }
  &__list {
    border: 1px solid rgba(#fff, 0.4);
    height: 30px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 22px;
      padding: 0px 12px;
      color: #fff;
      opacity: 0.4;
      margin-left: -1px;
      &.active {
        background: rgba(#fff, 0.2);
        opacity: 1;
      }
      &:hover {
        background: rgba(#fff, 0.2);
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>
