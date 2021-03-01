<template>
  <div class="container-fluid referenzen">
    <b-col md="8" offset-md="2" >
      <div class="referenzen__title">
        {{component.title}}
      </div>
      <div class="referenzen__subtitle">
        {{component.subtitle}}
      </div>
    </b-col>
    <b-container class="referenzen__slider">
      <VueSlickCarousel v-bind="settings">
        <div v-for="slide in component.referenzen" :key="slide.id">
          <CardSlider :slide='slide'/>
        </div>
      </VueSlickCarousel>
    </b-container>
  </div>
</template>

<script>
import CardSlider from '@/components/Elements/CardSlider'
export default {
  name: "Reference",
  components: {CardSlider},
  props: ['component'],
  data() {
    return {
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      }
    };
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';

  .referenzen {
    padding: 100px 0 50px 0;
    &__title {
      color: map-get($colors, dark-blue);
      font-family: map-get($font-families, third);
      font-size: 42px;
      text-align: center
    }
    &__subtitle {
      color: map-get($colors, dark-blue);
      font-family: map-get($font-families, secondary);
      font-size: 17px;
      line-height: 36px;
      text-align: center;
      margin: 30px 0 60px 0;
    }
    &__slider {
      .slick-list {
        padding-bottom: 50px;
      }
      .slick-prev {
        width: 34px;
        height: 34px;
        background-color: map-get($colors, white-gray);
        left: -50px;
        &:before {
          content: '';
          display: block;
          background-size: auto;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-image: url("~/assets/img/arrow.png");
        }
        &:hover {
          background-color: map-get($colors, grey);

          &:before {
            transform: rotate(180deg);
            background-image: url("~/assets/img/arraw-hover.png");
          }
        }
      }

      .slick-next {
        width: 34px;
        height: 34px;
        background-color: map-get($colors, white-gray);
        right: -50px;
        &:before {
          content: '';
          display: block;
          background-size: auto;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          transform: rotate(180deg);
          background-image: url("~/assets/img/arrow.png");
        }
        &:hover {
          background-color: map-get($colors, grey);
          &:before {
            transform: rotate(0deg);
            background-image: url("~/assets/img/arraw-hover.png");
          }
        }
      }
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
    }
  }


</style>
