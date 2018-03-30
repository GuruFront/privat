<template>
  <div class="container">
    <p class="vuex">
      {{message}}
    </p>
    <input class="input" type="number" v-model="result" @input="updateCurrent">
    <router-link class="btn btn-primary" to="/result">Посчитать</router-link>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      current: "0"
    }
  },
  methods: {
    updateCurrent(e) {
      this.$store.commit('updateCurrent', e.target.value)
    }
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    result() {
      return this.$store.state.current;
    }
  }
}
</script>
<style lang="scss">
@import '../main.scss';

</style>
