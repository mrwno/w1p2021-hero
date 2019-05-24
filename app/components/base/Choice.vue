<template>
  <div class="buttons m1">
    <h2>{{choice.name}}</h2>

  </div>
</template>

<script>
import service from '../../service/grappinRoute.js';

export default {
  props: ['choice'],
  //   methods: {
  //   choose2() {
  //     service.add(this.choice.name)
  //     if ( service.has('Recommencer'))
  //       return service.delete();
  //   }
  // }
};
</script>
