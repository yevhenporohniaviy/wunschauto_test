<template>
  <b-navbar toggleable="lg" fixed="top"  class="navigation" :class="{color: scrollPosition > 50}">
    <b-container>
      <b-navbar-brand href="#">
        <img :src="navbar.image.url" class="img-fluid" alt="logo"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >
          <b-navbar-nav>
            <b-nav-item
              href="#"
              class="mx-3"
              v-for="(link, index) in navbar.image.page_links"
              :key="index"
            >
              {{ link.title }}
            </b-nav-item>
          </b-navbar-nav>
            <ButtonLink :url="'/'" :gradient="true">{{ navbar.image.button }}</ButtonLink>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import ButtonLink from '@/components/Elements/ButtonLink'

export default {
  name: "Navbar",
  props: ['navbar'],
  components: {
    ButtonLink
  },
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped lang="scss">
@import './assets/styles/variables';

.navigation {
  border-bottom: 1px solid map-get($colors-border, primary) ;
  transition: 0.5s linear;
  &.color {
    background-color: map-get($colors-border, primary)
  }

  .navbar-nav {
    align-items: center;
    .nav-item {
      .nav-link {
        color: map-get($colors, white);
        font-size: 17px;
        text-transform: uppercase;
      }
    }
  }
}


</style>
