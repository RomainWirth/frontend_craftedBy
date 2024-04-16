<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isBurgerIcon: true
    };
  },
  methods: {
    toggleEvent() {
      this.isBurgerIcon = !this.isBurgerIcon;
    }
  }
}
</script>

<template>
  <header class="fixed bottom-0 z-10 w-full flex justify-center bg-dark">
    <nav class="w-[320px] flex justify-evenly p-2">
      <RouterLink to="/">
          <img src="../assets/images/crafted_by_logo.png" alt="" class="w-12 h-12">
      </RouterLink>
      <RouterLink to="/profile">
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-tertiary-light">
          <p class="text-4xl text-secondary text-center">
            <i-ph-user-circle />
          </p>
        </div>
      </RouterLink>
      <RouterLink to="/cart">
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-tertiary-light">
          <p class="text-2xl text-secondary text-center">
            <i-ph-shopping-cart />
          </p>
        </div>
      </RouterLink>
      <!-- <details class="dropdown dropdown-top dropdown-end">
        <summary role="button" class="text-3xl text-secondary text-center w-12 h-12 flex justify-center items-center rounded-[50%] bg-tertiary-light" @click="toggleEvent">
            <i-ph-list v-if="isBurgerIcon"/>
            <i-ph-x v-else />
        </summary>
        <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/catalog">Catalogue</RouterLink></li>
          <li><RouterLink to="/artisan">Artisans</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </details> -->
    </nav>
  </header>
</template>

<style>
summary {
  /* Hide the list arrow */
  list-style: none;
}
</style>