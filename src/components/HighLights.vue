<script>
import ItemSmallCard from './ui/ItemSmallCard.vue';
import { useItemStore } from "../stores/ItemStore";

export default {
  name: 'HighLights',
  setup() {
    const itemStore = useItemStore();
    return {itemStore};
  },
  components: {
    ItemSmallCard,
  },
  async mounted() {
    await this.itemStore.fetchItems();
    console.log(this.itemStore.fetchItems());
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center rounded-t-xl overflow-hidden mt-2">
    <h4 class="w-full py-1 text-center bg-secondary">Highlights</h4>
    <div class="flex items-center m-auto w-full h-64 overflow-x-scroll">
      <RouterLink 
        v-for="item in itemStore.items" 
        :to="`/current-item/${item.id}`" 
        :key="item.id"
        class="block h-full"
      >
        <ItemSmallCard :item="item" />
      </RouterLink>
    </div>
  </div>
</template>
