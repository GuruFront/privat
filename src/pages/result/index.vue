<template>
	<div class="container">
		<h1>{{result}}</h1>
		<router-link  class="btn btn-primary" to="/"> Назад</router-link>
	</div>
</template>
<script>
export default {
  name: 'Result',
  computed :{
  	result(){
  		return this.$store.state.current;
  	}
  }
}
</script>
<style lang="scss">
@import '../main.scss';
</style>
