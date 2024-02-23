<script>
import ItemSmallCard from '@/components/ui/ItemSmallCard.vue';

export default {
  name: 'CartView',
  component: {
    ItemSmallCard,
  },
  computed: {
    totalItems() {
      const items = this.$Cart.items;
      return items.length();
    }
  }
}
</script>

<template>
  <div class="cart m-1 flex flex-col items-center">
    <h2>Mon panier</h2>
    <div class="flex flex-col justify-between items-center">
      <!-- <p>Nombre d'articles(s) : {{ totalItems }}</p> -->
      <p>Prix total : {{ $Cart.getTotalPrice }} €</p>
    </div>
    <div>
      <RouterLink to="/login" custom v-slot="{navigate}">
        <button @click="navigate" role="link">Valider mon Panier</button>
      </RouterLink>
    </div>
    <div 
      v-for="item in $Cart.items"
      :key="item.id"
    >
      <div class="p-1 flex flex-col justify-between items-center gap-1 bg-tertiary-light rounded-md shadow-sm">
        <i-ph-x 
          @click="$Cart.removeFromCart(item)"
          class="self-end"
        />
        <ItemSmallCard
          :item="item"
        />
      </div>
      <div class="w-4/5 h-1 border-b-1 border-dark"></div>
    </div>
  </div>
</template>