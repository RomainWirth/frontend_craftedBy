<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  methods: {
    itemPrice() {
      if (!this.item.price) {
        return 'Price unknown'
      }
      console.log(this.item);
      return this.item.price / 100
    },
    artisan() {
      return this.item.artisan
    }
  }
}
</script>

<template>
  <div class="mt-2 h-svh w-full flex flex-col items-center gap-2">
    <div class="w-[304px] h-60">
      <img class="size-full" :src="item.imageUrl" :alt="item.name">
    </div>
    <div class="flex flex-col items-center w-full gap-2">
      <div class="mx-auto flex flex-col justify-between items-center">
        <h2>{{ item.name }}</h2>
        <div class="flex">
          <div>bouton -</div>
          <p>1</p>
          <div>bouton +</div>
        </div>
      </div>
      <div class="flex">
        <p>bouton 1</p>
        <p>bouton 2</p>
      </div>
      <div class="flex justify-evenly">
        <p>{{ itemPrice() }} €</p>
        <button @click="$Cart.addToCart(item)">Commander</button>
      </div>
      <p>{{ item.description }}</p>
      <div class="flex">
        <!-- <p>Artisan : {{ this.item.artisan.companyName ? this.item.artisan.companyName : null }}</p> -->
        <div>share button</div>
      </div>
    </div>
  </div>
</template>