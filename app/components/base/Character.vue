<template>
  <div @click="choose" class="">
    <h2 class="buttons top">{{character.name}}</h2>

    <h3 class="buttons bottom">{{character.speciality}}</h3>

  </div>
</template>

<script>
import service from '../../service/grappinRoute.js';

export default {
 props: ['character'],
  methods: {
    choose() {
      service.toggle(this.character.speciality)
    }
  }
};
</script>
