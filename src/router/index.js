import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudyVue from "@/components/StudyVue.vue";
import DayOne from "@/components/DayOne.vue";
import DayTwo from "@/components/DayTwo.vue";
import DayThree from "@/components/DayThree.vue";
import DayFour from "@/components/DayFour.vue";
import DayFive from "@/components/DayFive.vue";
import DaySix from "@/components/DaySix.vue";
import DaySeven from "@/components/DaySeven.vue";
import DayEight from "@/components/DayEight.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/studyVue',
    name: 'studyVue',
    component: StudyVue,
  },
  {
    path: '/dayOne',
    name: 'dayOne',
    component: DayOne,
  },
  {
    path: '/dayTwo',
    name: 'dayTwo',
    component: DayTwo,
  },
  {
    path: '/dayThree',
    name: 'dayThree',
    component: DayThree,
  },
  {
    path: '/dayFour',
    name: 'dayFour',
    component: DayFour,
  },
  {
    path: '/dayFive',
    name: 'dayFive',
    component: DayFive,
  },
  {
    path: '/daySix',
    name: 'daySix',
    component: DaySix,
  },
  {
    path: '/daySeven',
    name: 'daySeven',
    component: DaySeven,
  },
  {
    path: '/dayEight',
    name: 'dayEight',
    component: DayEight,
  },
]

const router = new VueRouter({
  routes
})

export default router
