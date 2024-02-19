<script>
import ArtisanSmallCard from './ui/ArtisanSmallCard.vue';

export default {
  components: {
    ArtisanSmallCard,
  }
}
</script>

<template>
  <div>
    <h4>Artisans du moment</h4>
    <!-- ADD v-for -->
    <div>
      <ArtisanSmallCard />
    </div>
  </div>
</template>