<template>
  <app-nav-bar logo="item"></app-nav-bar>

  <div class="container mt-5" v-if="isShow">
    <h5 class="mb-3">Title: {{ film.original_title }}({{ film.title }})</h5>
    <div class="info row">
      <div class="col col-md-6 mb-3" style="min-width: 300px">
        <img
          :src="originImg + film.poster_path"
          :alt="film.poster_path"
          v-if="film.poster_path"
          class="w-100"
        />
      </div>

      <div class="col col-md-6" style="min-width: 300px">
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

    <router-link to="/">
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
