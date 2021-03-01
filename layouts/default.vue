<template>
  <div>
    <NavBar :navbar="getNav"/>
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/Navigation/Navbar'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['fetchNav'])
  },
  computed: {
    ...mapGetters(['getNav'])
  },
  created() {
    this.fetchNav()
  }
}
</script>
