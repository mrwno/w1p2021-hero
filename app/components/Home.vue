<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="buttons m1">
     <router-link class="button" to="/characters"> Commencer ! </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bienvenue \! \n Vous allez devoir réaliser une mission très importante. \n Pour réussir celle ci vous aller devoir faire des choix importants qui détermineront la suite de votre aventure.\n\n Nous sommes actuellement dans une des jungle les plus vaste et les plus dangereuse de ce monde.\n\n\nVotre but ? Survivre'
    };
  }
};
</script>
