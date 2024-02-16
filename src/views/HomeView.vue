<script>
import TheWelcome from '../components/TheWelcome.vue'
import SearchBar from '../components/ui/SearchBar.vue'

export default {
  components: {
    SearchBar,
    TheWelcome,
  }
}
</script>

<template>
  <main>
    <div class="flex w-full">
      <SearchBar />
    </div>
    <TheWelcome />
  </main>
</template>
