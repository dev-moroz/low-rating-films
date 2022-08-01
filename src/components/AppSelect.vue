<template>
  <select v-model="selected" @change="newYear(selected)" class="form-control">
    <option :value="item" v-for="(item, i) in years" :key="i">
      {{ item }}
    </option>
  </select>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  data() {
    return {
      selected: 2022,
    }
  },
  methods: {
    ...mapActions(["newYear"]),
  },
  computed: {
    ...mapGetters(["years"]),
  },
}
</script>

<style></style>
