<template>
  <div class="container box">
    <h2>{{result}} UAH</h2>
    <router-link class="btn btn-primary" to="/"> Назад</router-link>
  </div>
</template>
<script>
export default {
  name: 'Result',
  computed: {
    result() {
      return this.$store.state.current * this.$store.state.fromUSD;
    }
  }
}

</script>
<style lang="scss">
@import '../main.scss';

</style>
