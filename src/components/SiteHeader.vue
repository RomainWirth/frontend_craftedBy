<script>
export default {
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
  <header class="fixed bottom-0 z-10 w-full flex">
    <div class="w-full flex justify-between p-[2%]">
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="synthwave" />
        <!-- sun icon -->
        <i-ph-sun class="swap-on fill-current w-6 h-6" />
        <!-- moon icon -->
        <i-ph-moon class="swap-off fill-current w-6 h-6" />
      </label>
      <RouterLink to="/">
          <img src="../assets/images/logo_base.png" alt="" class="w-12 h-12">
      </RouterLink>
      <RouterLink to="/profile">
        <div class="text-4xl w-12 h-12 flex justify-center items-center rounded-[50%]">
          <i-ph-user-circle />
        </div>
      </RouterLink>
      <RouterLink to="/cart">
        <div class="text-2xl w-12 h-12 flex justify-center items-center">
          <i-ph-shopping-cart />
        </div>
      </RouterLink>
      <nav>
        <details class="dropdown dropdown-top dropdown-end">
          <summary role="button" class="text-4xl w-12 h-12 flex justify-center items-center" @click="toggleEvent">
              <!-- hamburger icon -->
              <i-ph-list v-if="isBurgerIcon"/>
              <!-- close icon -->
              <i-ph-x v-else />
          </summary>
          <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/catalog">Catalogue</RouterLink></li>
            <li><RouterLink to="/artisan">Artisans</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
          </ul>
        </details>
      </nav>
    </div>
  </header>
</template>

<style>
summary {
  /* Hide the list arrow */
  list-style: none;
}
header {
  background-color: red;
}
</style>