<script>
import { useCartStore } from '@/stores/CartStore';
import ItemSmallCard from '@/components/ui/ItemSmallCard.vue';

export default {
  setup() {
    const cartStore = useCartStore();
    return {cartStore};
  },
  component: {
    ItemSmallCard,
  },
}
</script>

<template>
  <div class="cart m-1 flex flex-col items-center">
    <h2>Mon panier</h2>
    <div class="flex justify-between">
      <p>Total</p>
      <p>{{ cartStore.getTotalPrice }} €</p>
    </div>
    <button>Valider mon Panier</button>
    <div 
      v-for="item in cartStore.items"
      :key="item.id"
    >
      <ItemSmallCard
        :item="item"
      />
      <div>
        <i-ph-x 
          @click="cartStore.removeFromCart(item)"
        />
      </div>
      <div class="w-4/5 h-1 border-b-1 border-dark"></div>
    </div>
  </div>
</template>