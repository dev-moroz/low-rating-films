<template>
  <nav class="navbar navbar-light bg-light ml-2">
    <div class="container">
    <router-link class="navbar-brand" to="/">
      <img v-if="logoImg" src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Киновтопку"/>
    
      <span>Киновтопку</span>
    </router-link> 
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    logo: String,
  },
  computed: {
    logoImg(){
      return this.logo === 'home'
    }
  }
};
</script>

<style>
.navbar-brand span{
  color: #000;
}
</style>