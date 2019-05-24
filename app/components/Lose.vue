<template>
  <div class="big-header">

    <h1>{{ message }}</h1>
    <br />
    <div class="buttons m1">
     <router-link class="button" to="/"> Recommencer </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'You Lose'
    };
  }
};
</script>
