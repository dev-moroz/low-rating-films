<template>
  <div class="col col-sm-3 mb-2 mb-3">
    <select v-model="selected" @change="newYear(selected)" class="form-control">
      <option :value="item" v-for="item,i in years" :key="i"> {{item}} </option>
    </select>
  </div>
    <div class="row" v-if="films">
      <div class="col col-sm-3 mb-2" v-for="(item, i) in films" :key="i">
        <div class="card">
          <div class="card-body">
            <router-link :to="{name: 'film', params: { id: item.id } }">
              <img class="card-img d-flex" :src="thumbnailImg + item.poster_path" alt=""  v-if="item.poster_path"/>
              <img src="https://via.placeholder.com/270x400" alt="" v-else>
              <hr>
              <h5>Title: {{ item.original_title }}</h5>
              <p>Date release: {{ item.release_date.split('-').join('.') }}</p>
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
import AppSpiner from "../components/AppSpiner"
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      selected: 2010,
      value: null,
    }
  },
  components:{
    AppSpiner,
  },
  computed: {
    ...mapGetters(['films', 'year', 'years', 'thumbnailImg']),
  },
  methods: {
    ...mapActions(['getFilms', 'newYear']),
  },
}
</script>

<style>
.card:hover{
  transition: all .3s;
  transform:scale(1.03);
}
.card{
  transition: all .3s;
}
.card-body a{
  text-decoration: none;
  color:rgb(60, 60, 60)
}
.card-body a:hover{
  color:#000
}
.card-body img{
  max-width: 100%;
}
</style>
