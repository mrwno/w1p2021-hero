import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Game1 from './components/Start.vue';
import Game2 from './components/Jungle.vue';
import Game3 from './components/River.vue';
import Game4 from './components/Ravin.vue';
import Game5 from './components/Ocean.vue';
import Lose from './components/Lose.vue';
import Win from './components/Win.vue';




Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/game/1',
      name: 'game1',
      component: Game1,
    },
    {
      path: '/game/2',
      name: 'game2',
      component: Game2,
    },
    {
      path: '/game/3',
      name: 'game3',
      component: Game3,
    },
    {
      path: '/game/4',
      name: 'game4',
      component: Game4,
    },
    {
      path: '/game/5',
      name: 'game5',
      component: Game5,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    }
  ],
});

export default router;
