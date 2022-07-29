<template>
  <nav class="navbar navbar-light bg-light ml-2">
    <div class="container">
    <router-link class="navbar-brand" to="/">
      <img v-if="logoImg" src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Киновтопку"/>
      <fa-icon icon="fa-video-camera " v-if="!logoImg"/>
      Киновтопку
    </router-link> 
    </div>
  </nav>
</template>

<script>
export default {
  props: ['logo'],
  computed: {
    logoImg(){
      return this.logo === 'home'
    }
  }
};
</script>

<style>
</style>