<template>
  <b-card
    class="slider-card p-3"
  >
    <b-img :src="slide.image.url" rounded="circle" alt="image model" width="95" height="95"/>
    <div class="slider-card__price"> {{slide.price}}</div>
    <div class="slider-card__model">{{slide.title}}</div>
    <div class="slider-card__description">
      {{slide.description}}
    </div>
    <div class="slider-card__client"> {{slide.subtitle}}</div>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: ['slide']
}
</script>

<style scoped lang="scss">
@import './assets/styles/variables';

  .slider-card {
  outline-offset: -10px;
  border: none;
  .card-body {
    -webkit-box-shadow: 0 10px 40px rgba(24, 37, 64, 0.1);
    -moz-box-shadow: 0 10px 40px rgba(24, 37, 64, 0.1);
    box-shadow: 0 10px 40px rgba(24, 37, 64, 0.1);
    border-radius: 5px;
    padding: 28px 24px;
  }
  &__price {
    font-family: map-get($font-families, third);
    padding-top: 20px;
    font-size: 26px;
    color: map-get($colors, dark-blue);
  }
  &__model {
    color: map-get($colors, grey);
    font-family: map-get($font-families, secondary);
    font-size: 17px;
  }
  &__description {
    padding: 30px 0;
    color: map-get($colors, dark-blue);
    line-height: 36px;
    font-family: map-get($font-families, secondary);
    font-size: 17px;
  }
  &__client {
    text-transform: uppercase;
    color: map-get($colors, red);
    font-family: map-get($font-families, secondary);
    font-size: 17px;
  }

}
</style>
