<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions(["getFilms"]),
  },
  mounted() {
    this.getFilms()
  },
}
</script>

<!-- <style lang="scss">
$color: red;

.link {
  color: $color;
}
</style> -->
