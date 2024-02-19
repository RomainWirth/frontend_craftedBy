<script>
import CategoryButton from './ui/CategoryButton.vue';

export default {
  components: {
    CategoryButton,
  }
}
</script>

<template>
  <div class="bg-green-500">
    <h4>Shop by Category</h4>
    <!-- ADD v-for -->
    <div>
      <CategoryButton />
    </div>
  </div>
</template>