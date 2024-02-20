<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    owner: String,
    price: Number,
    category: String,
    description: String,
  }
}
</script>

<template>
  <div>
    <img :src="props.imageUrl" alt="image description">
  </div>
  <div>
    <h4>{{ props.title }}</h4>
    <p>{{ props.owner }}</p>
    <p>{{props.description}}</p>
    <p>{{props.price}}</p>
  </div>
</template>