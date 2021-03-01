<template>
  <div class="banner" :style="{backgroundImage: `url(${component.background_image.url })` }">
    <div class="banner__overlay-img"/>
    <div class="banner__overlay-content content">
      <div class="content__logo">
        <img :src="component.image.url" class="img-fluid" alt="logo" width="100"/>
        <div class="content__title">
          {{ component.title }}
        </div>
      </div>

      <div class="content__description">
        {{ component.subtitle }}
      </div>
      <div class="content__group-btn">
        <ButtonLink :url="'/'" :gradient="true" class="m-3">{{ component.button_1 }}</ButtonLink>
        <ButtonLink :url="'/'" :gradient="false" class="m-3">{{ component.button_2 }}</ButtonLink>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from '@/components/Elements/ButtonLink'

export default {
  name: "Banner",
  props: ['component'],
  components: {
    ButtonLink
  }
}
</script>

<style scoped lang="scss">
@import './assets/styles/variables';

.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 800px;
  &__overlay-img {
     position: absolute;
     background-image: linear-gradient(180deg, #111111 0%, rgba(24, 24, 24, 0.8) 50%, rgba(96, 96, 96, 0) 100%);
     opacity: 0.6;
     height: 100%;
     width: 100%;
   }
  &__overlay-content{
    position: absolute;
  }
}

.content {
  &__logo{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__title{
    font-family: map-get($font-families, primary);
    color: map-get($colors, white);
    font-size: 37px;
    margin-top: 25px;
    text-align: center;
  }
  &__description{
    color: map-get($colors, white);
    font-family: map-get($font-families, secondary);
    font-size: 17px;
    margin-top: 90px;
    margin-bottom: 25px;
    text-align: center;
  }
  &__group-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 525px) {
      flex-direction: column;
    }
  }
}

</style>
