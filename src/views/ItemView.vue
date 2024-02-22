<script>
import { useItemStore } from "../stores/ItemStore"
import CategoryButton from '@/components/ui/CategoryButton.vue'
import ItemCard from '@/components/ui/ItemCard.vue'

export default {
  name: 'ItemView',
  setup() {
    const itemStore = useItemStore();
    console.log(itemStore);
    return {itemStore};
  },
  component: {
    CategoryButton,
    ItemCard,
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.itemStore.fetchOneItem(id);
    console.log(this.itemStore.fetchOneItem(id));
  },
}

</script>

<template>
  <div class="item flex flex-col items-center">
    <RouterLink to="/">
      <CategoryButton :category="itemStore.getItem.category"/>
    </RouterLink>
    <ItemCard :item="itemStore.getItem" />
  </div>
</template>