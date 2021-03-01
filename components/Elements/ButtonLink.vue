<template>
  <router-link
    tag='button'
    :to="url"
    class="button-link"
    :class="gradient ? 'gradient' : ''">
    <slot>Button</slot>
  </router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  props: ['url','gradient']
}
</script>

<style scoped lang="scss">
@import './assets/styles/variables';

.button-link {
  border-radius: 60px;
  color: map-get($colors, white);
  padding: 18px 60px;
  font-size: 1.125rem;
  overflow: hidden;
  position: relative;
  border: 1px solid map-get($colors, white);
  background-color: transparent;
  text-transform: uppercase;
  &.gradient {
    border: none;
    background: linear-gradient(90deg,#e50612,#730309);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
          90deg
        ,#730309,#e50612)!important;
      z-index: -1;
      transition: opacity .5s linear;
      opacity: 0;
    }
    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }

  @media (max-width: 525px) {
    padding: 8px 50px;
  }
}

</style>
