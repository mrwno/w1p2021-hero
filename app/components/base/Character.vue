<template>
  <div @click="choose" class="">
    <h2>{{character.name}}</h2>

    <h3>{{character.speciality}}</h3>

  </div>
</template>

<script>
import service from '../../service/grappinRoute.js';

export default {
 props: ['character'],
  methods: {
    choose() {
      service.add(this.character.speciality)
    }
  }
};
</script>
