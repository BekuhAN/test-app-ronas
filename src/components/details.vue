<template>
  <div class="details row">
    <DetailsItem
      class="details__item col-sm-3 col-6"
      :title="'Ветер'"
      :value="data.wind.speed + ' м/с, ' + setCompass(data.wind.deg)"
    />
    <DetailsItem
      class="details__item col-sm-3 col-6"
      :title="'Давление'"
      :value="data.main.pressure + ' мм рт. ст.'"
    />
    <DetailsItem
      class="details__item col-sm-3 col-6"
      :title="'Влажность'"
      :value="data.main.humidity + ' %'"
    />
    <DetailsItem
      class="details__item col-sm-3 col-6"
      :title="'Вероятность дождя'"
      :value="'10 %'"
    />
    <!-- Тут я столкнулся с такой проблемой, что данный api не предоставляет вероятность дождя с бесплатной подпиской. -->
  </div>
</template>

<script>
import DetailsItem from "./detailsItem.vue";
export default {
  props: ["data"],
  methods: {
    setCompass(deg) {
      const arr = [
        "северный",
        "северо-восточный",
        "восточный",
        "юго-восточный",
        "южный",
        "юго-западный",
        "западный",
        "северо-западный",
      ];
      if (Math.round(deg / 45) > arr.length - 1) {
        return arr[0];
      }
      return arr[Math.round(deg / 45)];
    },
  },
  components: {
    DetailsItem,
  },
};
</script>

<style lang="scss"></style>
