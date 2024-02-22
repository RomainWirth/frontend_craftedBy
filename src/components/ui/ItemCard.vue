<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  }
}
</script>

<template>
  <div class="flex flex-col">
    <img :src="item.image" alt="">
    <div class="flex flex-col">
      <div class="mx-auto flex flex-col justify-between items-center">
        <h2>{{ item.title }}</h2>
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
        <p>{{ item.price }}</p>
        <p>Commander</p>
      </div>
      <p>{{ item.description }}</p>
      <div class="flex">
        <p>nom artisan</p>
        <div>share button</div>
      </div>
    </div>
  </div>
</template>