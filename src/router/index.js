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
import DayNine from "@/components/DayNine.vue";
import DayTen from "@/components/DayTen.vue";
import DayEleven from "@/components/DayEleven.vue";
import DayTwelve from "@/components/DayTwelve.vue";
import DayThirteen from "@/components/DayThirteen.vue";
import DayFourteen from "@/components/DayFourteen.vue";
import DayFifteen from "@/components/DayFifteen.vue";
import DaySixteen from "@/components/DaySixteen.vue";
import DaySeventeen from "@/components/DaySeventeen.vue";
import DayEighteen from "@/components/DayEighteen.vue";
import DayNineteen from "@/components/DayNineteen.vue";
import DayTwenty from "@/components/DayTwenty.vue";

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
  {
    path: '/dayNine',
    name: 'dayNine',
    component: DayNine,
  },
  {
    path: '/dayTen',
    name: 'dayTen',
    component: DayTen,
  },
  {
    path: '/dayEleven',
    name: 'dayEleven',
    component: DayEleven,
  },
  {
    path: '/dayTwelve',
    name: 'dayTwelve',
    component: DayTwelve,
  },
  {
    path: '/dayThirteen',
    name: 'dayThirteen',
    component: DayThirteen,
  },
  {
    path: '/dayFourteen',
    name: 'dayFourteen',
    component: DayFourteen,
  },
  {
    path: '/dayFifteen',
    name: 'dayFifteen',
    component: DayFifteen,
  },
  {
    path: '/daySixteen',
    name: 'daySixteen',
    component: DaySixteen,
  },
  {
    path: '/daySeventeen',
    name: 'daySeventeen',
    component: DaySeventeen,
  },
  {
    path: '/dayEighteen',
    name: 'dayEighteen',
    component: DayEighteen,
  },
  {
    path: '/dayNineteen',
    name: 'dayNineteen',
    component: DayNineteen,
  },
  {
    path: '/dayTwenty',
    name: 'dayTwenty',
    component: DayTwenty,
  },
]

const router = new VueRouter({
  routes
})

export default router
