<template>
  <div class="container-fluid benefits">
    <b-col md="8" offset-md="2" >
      <div class="benefits__subtitle">
        {{component.title}}
      </div>
      <div class="benefits__title">
        {{component.subtitle}}
      </div>
    </b-col>
    <b-container class="benefits__cards">
      <b-row>
        <b-col xl="3" md="6" cols="12" class="mb-4 mb-md-0" v-for="(item, index) in component.vorteile" :key="index">
          <div class="d-flex align-items-center justify-content-center justify-content-md-start">
            <h4 class="benefits__cards__number text-center text-md-left" data-v-39592cde="">
            {{index+1}}
            </h4>
            <img alt="" class="benefits__cards__icon " :src="item.image.url">
          </div>
          <div class="benefits__cards__title text-center text-md-left">
            {{item.title}}
          </div>
          <div class="benefits__cards__description text-center text-md-left">
            {{item.description}}
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Benefits",
  props: ['component'],
  data() {
    return {

    };
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';

.benefits {
  padding: 100px 0 50px 0;
  background-color: map-get($colors, dark-blue);
  &__title {
    color: map-get($colors, white);
    font-family: map-get($font-families, third);
    font-size: 42px;
    text-align: center;
    margin: 20px 0 70px 0;
  }
  &__subtitle {
    color: map-get($colors, white);
    font-family: map-get($font-families, fourth);
    font-size: 18px;
    text-align: center;
    letter-spacing: 5.4px;
    text-transform: uppercase;
  }
  &__cards {
    &__number {
      opacity: 0.1;
      color: map-get($colors, white);
      font-family: map-get($font-families, secondary);
      font-size: 80px;
      font-weight: 700;
    }
    &__icon {
      margin-left: 20px;
    }
    &__title {
      color: map-get($colors, white);
      font-family: map-get($font-families, third);
      font-size: 26px;
      margin-top: 20px;
    }
    &__description {
      margin-top: 25px;
      color: map-get($colors, white);
      font-family: map-get($font-families, secondary);
      font-size: 17px;
      line-height: 36px;
    }
  }
}


</style>
