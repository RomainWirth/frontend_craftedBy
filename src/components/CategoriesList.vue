<script>
import CategoryButton from './ui/CategoryButton.vue';

export default {
  name: 'CategoriesList',
  components: {
    CategoryButton,
  },
  async mounted() {
    await this.$Item.fetchCategories();
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
        v-for="category in $Item.getCategories"
        :key="category.id"
      >
        <CategoryButton 
          :category="category"
        />
      </RouterLink>
    </div>
  </div>
</template>