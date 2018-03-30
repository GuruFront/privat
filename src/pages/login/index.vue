<template>
  <div class="container box">
    <h5>Введите значение</h5>
    <input class="input" type="number" v-model="result" placeholder="USD" @input="updateCurrent" v-on:submit="">
    <div class="btn btn-primary" @click='go'>Посчитать</div>
    <div @click='clear' class="clear btn btn-primary">Очистить</div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      current: "",
      fromUSD: 0
    }
  },
  methods: {
    clear() {
      this.$store.commit('updateCurrent', "")
    },
    updateCurrent(e) {
      this.$store.commit('updateCurrent', e.target.value)
    },
    go() {
      if (this.$store.state.current == 0) {
        alert("The field is empty, enter your value");
      } else {
        this.$router.push('/result')
      }
    },
    load() {
      var vm = this;
      this.axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(function(response) {
        return vm.$store.commit('updateUSD', response.data[0].buy);
      }).catch(function(error) {
        console.log(error)
      });
    }
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
    result() {
      return this.$store.state.current;
    }
  },
  created() {
    this.load();
  }
}

</script>
<style lang="scss">
@import '../main.scss';

</style>
