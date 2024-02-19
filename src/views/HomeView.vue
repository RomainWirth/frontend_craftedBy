<script>
import HighLights from '../components/HighLights.vue'
import CategoriesList from '../components/CategoriesList.vue';
import ArtisansList from '../components/ArtisansList.vue';

export default {
  components: {
    HighLights,
    CategoriesList,
    ArtisansList,
  }
}
</script>

<template>
  <main>
    <HighLights />
    <CategoriesList />
    <ArtisansList />
  </main>
</template>
