import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'HeroView', component: () => import('@/views/HeroView.vue')},
    { path: '/trips-card/:id', name: 'cardsTrips', component: () => import('@/views/ItemCards.vue')}
  ];

  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router