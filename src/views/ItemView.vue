<script>
import CategoryButton from '@/components/ui/CategoryButton.vue'
import ItemCard from '@/components/ui/ItemCard.vue'

export default {
  name: 'ItemView',
  component: {
    CategoryButton,
    ItemCard,
  },
  async mounted() {
    const id = this.$route.params.id;
    await this.$Item.fetchOneItem(id);
    // console.log(this.$Item.fetchOneItem(id));
  },
}
</script>

<template>
  <div class="item flex flex-col items-center">
    <RouterLink :to="`/catalog/${$Item.getItem.category}`">
      <CategoryButton :category="$Item.getItem.category"/>
    </RouterLink>
    <ItemCard :item="$Item.getItem" />
  </div>
</template>