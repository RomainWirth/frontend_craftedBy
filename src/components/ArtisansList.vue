<script>
import ArtisanSmallCard from './ui/ArtisanSmallCard.vue';
import { useArtisanStore } from '@/stores/ArtisanStore';

export default {
  name: 'ArtisansList',
  setup() {
    const artisanStore = useArtisanStore();
    return {artisanStore};
  },
  components: {
    ArtisanSmallCard,
  },
  async mounted() {
    await this.$Artisan.fetchArtisans();
    console.log(this.$Artisan.fetchArtisans())
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center rounded-t-xl overflow-hidden mt-2">
    <h4 class="bg-secondary w-full py-1 text-center">Artisans</h4>
    <!-- ADD v-for -->
    <div class="flex flex-col items-center m-auto py-2 gap-2 overflow-x-scroll h-[500px] w-full">
      <RouterLink 
        v-for="artisan in artisanStore.artisans" 
        :to="`/current-artisan/${artisan.id}`" 
        :key="artisan.id"
        class="block"
      >
        <ArtisanSmallCard :artisan="artisan"/>
      </RouterLink>
    </div>
  </div>
</template>