<template>
  <div class="row" v-if="films">
    <div class="col col-sm-3 mb-2" v-for="(item, i) in films" :key="i">
      <div class="card">
        <div class="card-body">
          <router-link :to="{ name: 'film', params: { id: item.id } }">
            <img
              class="card-img d-flex"
              :src="thumbnailImg + item.poster_path"
              alt=""
              v-if="item.poster_path"
            />
            <img src="https://via.placeholder.com/270x400" alt="" v-else />
            <hr />
            <h5>Title: {{ item.original_title }}</h5>
            <p>Date release: {{ item.release_date.split("-").join(".") }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <template v-else>
    <app-spiner></app-spiner>
  </template>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  computed: {
    ...mapGetters(["films", "thumbnailImg"]),
  },
  methods: {
    ...mapActions(["getFilms"]),
  },
  mounted(){
    this.getFilms()
  }
}
</script>

<style>
.card:hover {
  transition: all 0.3s;
  transform: scale(1.03);
}
.card {
  transition: all 0.3s;
}
.card-body a {
  text-decoration: none;
  color: rgb(60, 60, 60);
}
.card-body a:hover {
  color: #000;
}
.card-body img {
  max-width: 100%;
}
</style>
