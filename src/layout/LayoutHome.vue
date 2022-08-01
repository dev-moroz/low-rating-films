<template>
  <app-nav-bar logo="home"></app-nav-bar>

  <div class="container mt-5 mb-3">
    <div class="col col-sm-3 mb-2 mb-3">
      <app-select></app-select>
    </div>

    <app-cards></app-cards>

  </div>

</template>

<script>

import AppNavBar from "@/components/AppNavBar"
import AppCards from "@/components/AppCards"
import AppSelect from "@/components/AppSelect.vue"

export default {
  components: {
    AppNavBar,
    AppCards,
    AppSelect
  },
}
</script>
