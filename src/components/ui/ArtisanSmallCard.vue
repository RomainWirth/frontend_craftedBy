<script>
export default {
  name: 'ArtisanSmallCard',
  props: {
    artisan: {
      type: Object,
      required: true,
    }
  },
  methods: {
    companyName() {
      if(!this.artisan.companyName) {
        return null
      }
      return this.artisan.companyName;
    },
    specialty() {
      if(!this.artisan.specialty) {
        return 'Aucune spécialité à afficher'
      }
      return this.artisan.specialty
    }
  }
}
</script>

<template>
  <div class="h-full w-full flex flex-col items-center">
    <h4>{{ artisan.user.firstname }} {{artisan.user.lastname}}</h4>
    <h5>{{ companyName() }}</h5>
    <div v-for="specialty in artisan.specialty" :key="specialty.id" class="flex flex-col items-center">
      <p>spécialité : {{ specialty.name ? specialty.name : 'pas de spécialité' }}</p>
    </div>
  </div>
</template>