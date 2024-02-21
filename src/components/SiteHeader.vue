<script>
</script>

<template>
  <header class="fixed bottom-0 z-10 w-full flex">
    <div class="w-full flex justify-between p-[2%]">
      <RouterLink to="/">LOGO</RouterLink>
      <RouterLink to="/profile">Logo Profil</RouterLink>
      <RouterLink to="/cart">Logo Panier</RouterLink>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/catalog">Catalogue</RouterLink></li>
          <li><RouterLink to="/artisan">Artisans</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
header {
  background-color: red;
}
</style>