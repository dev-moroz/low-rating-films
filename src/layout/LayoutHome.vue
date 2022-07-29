<template>
    <app-nav-bar logo="home"></app-nav-bar>
    <div class="container mt-5 mb-3">
      <app-cards></app-cards>
    </div>
</template>

<script>
import AppNavBar from "../components/AppNavBar"
import AppCards from "../components/AppCards"

export default {
  components: {
    AppNavBar,
    AppCards,
  },
}

</script>
