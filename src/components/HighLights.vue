<script>
import ItemSmallCard from './ui/ItemSmallCard.vue';
import { useItemStore } from "../stores/ItemStore";

export default {
  name: "HighLights",
  setup() {
    const itemStore = useItemStore();
    return {itemStore};
  },
  components: {
    ItemSmallCard,
  },
  async mounted() {
    await this.itemStore.fetchItems();
    console.log(this.itemStore.fetchItems())
  }
}
</script>

<template>
  <div class="w-[90%] flex flex-col items-center mx-auto">
    <h4>Highlights</h4>
    <div class="flex flex-col m-auto w-full">
      <RouterLink :to="`/current-item/${item.id}`" v-for="item in itemStore.items" :key="item.id">
        <ItemSmallCard 
          :title="item.title"
          :imageUrl="item.image"
          :price="item.price"
          :category="item.category"
          cardContentClass="flex items-center"
          imageClass="w-1/2"
          :imageAlt="item.title"
          contentClass="w-1/2 h-full flex flex-col justify-evenly items-center"
          contentPriceClass="self-end"
        />
      </RouterLink>
    </div>
  </div>
</template>
