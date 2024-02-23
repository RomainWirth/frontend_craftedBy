<script>
export default {
  name: 'ItemSmallCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: false
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <img class="w-1/2" :src="item.image" :alt="item.title">
    <div class="w-1/2 h-full flex flex-col justify-evenly items-center">
      <h4>{{ item.title }}</h4>
      <p class="self-start">{{ item.category }}</p>
      <p class="self-end">p.u. : {{ item.price }} €</p>
      <p v-if="quantity">quantité : {{ quantity }}</p>
    </div>
  </div>
</template>