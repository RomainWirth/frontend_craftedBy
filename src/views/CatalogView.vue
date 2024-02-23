<script>
// import { useItemStore } from '@/stores/ItemStore';
import CategoryButton from '@/components/ui/CategoryButton.vue';
import ItemSmallCard from '@/components/ui/ItemSmallCard.vue';

export default {
  name: 'CatalogView',
  component: {
    CategoryButton,
    ItemSmallCard,
  },
  async mounted() {
    const category = this.$route.params.category;
    await this.$Item.fetchItemsInCategory(category);
  }
}
</script>

<template>
  <div class="catalog flex flex-col items-center p-2">
    <div>
      <CategoryButton 
        :category="this.$route.params.category"
      />
    </div>
    <div class="m-2">
      <RouterLink 
        :to="`/current-item/${item.id}`" 
        v-for="item in $Item.items" 
        :key="item.id"
      >
        <ItemSmallCard :item="item"/>
      </RouterLink>
    </div>
  </div>
</template>