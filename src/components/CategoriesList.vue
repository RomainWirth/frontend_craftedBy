<script>
import { useItemStore } from '@/stores/ItemStore';
import CategoryButton from './ui/CategoryButton.vue';

export default {
  setup() {
    const itemStore = useItemStore();
    return {itemStore};
  },
  components: {
    CategoryButton,
  },
  async mounted() {
    await this.itemStore.fetchCategories();
  }
}
</script>

<template>
  <div class="bg-green-500">
    <h4>Shop by Category</h4>
    <!-- ADD v-for -->
    <div>
      <RouterLink 
        :to="`/catalog/${category}`"
        v-for="category in itemStore.getCategories"
        :key="category.id"
      >
        <CategoryButton 
          :category="category"
        />
      </RouterLink>
    </div>
  </div>
</template>