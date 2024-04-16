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
  <div class="flex flex-col items-center justify-center w-full h-full bg-tertiary-light rounded-lg text-center">
    <h5>{{ category }}</h5>
  </div>
</template>