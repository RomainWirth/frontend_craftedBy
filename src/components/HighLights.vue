<script>
import ItemSmallCard from './ui/ItemSmallCard.vue'
// import { onMounted, computed } from "vue";

import { useItemStore } from "../stores/ItemStore";
// const items = computed(() => {
//   return itemStore.items;
// })

// onMounted(() => {
//   itemStore.fetchItems();
// })

export default {
  name: "HighLights",
  setup() {
    const itemStore = useItemStore();
    itemStore.fetchItems()
    const items = itemStore.items;
    console.log(items);
    return items;
  },
  components: {
    ItemSmallCard,
  },
}
</script>

<template>
  <div>
    <h4>Highlights</h4>
    <div>
      <ItemSmallCard 
        v-for="item in items" 
        :key="item.title"
        title="item.title"
        imageUrl="item.image"
        price="item.price"
        category="item.category"
        description="item.description"
      />
    </div>
  </div>
</template>
