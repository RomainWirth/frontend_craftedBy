<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div class="flex w-full bg-tertiary-light">
    <h5>{{ category }}</h5>
  </div>
</template>