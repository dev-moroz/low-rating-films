import { createStore } from "vuex"

export default createStore({
  state: {
    films: null,
    api_key: "ecec5a8d75194f3df5cfd3838b2b5351",
    // api_key: process.env.VUE_APP_API_KEY,
    year: 2022,
    film: null,
    years: [
      1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
      1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
      2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
      2016, 2017, 2018, 2019, 2020, 2021, 2022,
    ],
    thumbnailImg: "https://image.tmdb.org/t/p/w300",
    originImg: "https://image.tmdb.org/t/p/w500",
    apiUrl: "https://api.themoviedb.org/3/",
  },
  getters: {
    originImg: state => state.originImg,
    thumbnailImg: state => state.thumbnailImg,
    films: state => state.films,
    year: state => state.year,
    film: state => state.film,
    years: state => state.years,
  },
  mutations: {
    setFilms(state, data) {
      state.films = data
    },
    setYear(state, data) {
      state.year = data
    },
    setFilm(state, data) {
      state.film = data
    },
  },
  actions: {
    getFilms({ commit, state }) {
      fetch(
        `${state.apiUrl}discover/movie?api_key=${state.api_key}&primary_release_year=${state.year}&sort_by=vote_average.asc`
      )
        .then(response => response.json())
        .then(data => commit("setFilms", data.results.slice(0, 10)))
    },
    getFilm({ commit, state }, id: number) {
      fetch(`${state.apiUrl}movie/${id}?api_key=${state.api_key}`)
        .then(response => response.json())
        .then(data => commit("setFilm", data))
    },
    newYear({ commit, dispatch }, data: number) {
      commit("setYear", data)
      return dispatch("getFilms")
    },
  },
  modules: {},
})
