<script>
export default {
  name: 'ItemSmallCard',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    cardContentClass: {
      type: String,
      required: true,
    },
    imageContainerClass: {
      type: String,
      required: true,
    },
    imageClass: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    contentClass: {
      type: String,
      required: true,
    },
    cotentTitleClass: {
      type: String,
      required: false,
    },
    cotentOwnerClass: {
      type: String,
      required: false,
    },
    contentPriceClass: {
      type: String,
      required: false,
    },
  }
}
</script>

<template>
  <div :class="cardContentClass">
    <img :class="imageClass" :src="imageUrl" :alt="imageAlt">
    <div :class="contentClass">
      <h4 :class="contentTitleClass">{{ title }}</h4>
      <p :class="contentOwnerClass">{{ owner }}</p>
      <p :class="contentPriceClass">{{ price }}</p>
    </div>
  </div>
</template>