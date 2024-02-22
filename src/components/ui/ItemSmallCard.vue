<script>
export default {
  name: 'ItemSmallCard',
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <img class="w-1/2" :src="item.image" :alt="item.title">
    <div class="w-1/2 h-full flex flex-col justify-evenly items-center">
      <h4>{{ item.title }}</h4>
      <p>{{ item.category }}</p>
      <p class="self-end">{{ item.price }}</p>
    </div>
  </div>
</template>