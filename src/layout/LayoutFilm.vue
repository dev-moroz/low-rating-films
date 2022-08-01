<template>
  <app-nav-bar logo="film"></app-nav-bar>

  <div class="container mt-5" v-if="isShow">
    <h5 class="mb-3 text-center">Title: {{ film.original_title }}({{ film.title }})</h5>
    <div class="info row">
      <div class="col col-md-6 mb-3" style="min-width: 300px" v-if="film.poster_path">
        <img
          :src="originImg + film.poster_path"
          :alt="film.poster_path"
          class="w-100"
        />
      </div>

      <div class="col"  style="min-width: 300px" :class="film.poster_path ? col-md-6 : col-md-12">
        <div v-if="film.overview">
          <p>overview:</p>
          <p>{{ film.overview }}</p>
        </div>

        <temaplate v-if="film.backdrop_path">
          <hr />
          <p>backdrops:</p>
          <img
            :src="originImg + film.backdrop_path"
            :alt="film.backdrop_path"
            class="w-100"
          />
        </temaplate>
      </div>
    </div>

    <router-link class="d-flex justify-content-center" to="/">
      <button class="btn btn-primary mt-3 mb-3">back to movie list</button>
    </router-link>
  </div>

  <template v-else>
    <app-spiner></app-spiner>
  </template>
</template>

<script>
import AppNavBar from "../components/AppNavBar"
import AppSpiner from "../components/AppSpiner"

import { mapGetters, mapActions } from "vuex"

export default {
  components: {
    AppNavBar,
    AppSpiner,
  },
  computed: {
    ...mapGetters(["films", "film", "originImg", "thumbnailImg"]),
    id() {
      return this.$route.params.id
    },
    isShow() {
      return this.film && this.film.id === Number(this.$route.params.id)
    },
  },
  methods: {
    ...mapActions(["getFilm"]),
  },
  mounted() {
    this.getFilm(this.id)
  },
}
</script>
