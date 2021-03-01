<template>
  <div>
    <div v-for="(component, index) in this.payload" :key="index">
      <component :is="index" :component="component">
      </component>
    </div>
  </div>
</template>

<script>
import payload from '~/static/m2-payload-home.json'

export default {
  components: {
    'section_head' : () => import('@/components/Homepage/Banner'),
    'section_referenzen' : () => import('@/components/Homepage/Reference'),
    'section_vorteile' : () => import('@/components/Homepage/Benefits')
  },
  async asyncData () {
    return { payload }
  }
}
</script>
