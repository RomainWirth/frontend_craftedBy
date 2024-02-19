<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<template class="flex flex-col">
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>

<style>

</style>
