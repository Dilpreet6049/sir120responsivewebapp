import { createRouter, createWebHistory } from 'vue-router'
import AppUserList from '../views/AppUserList.vue'
import AppAbout from '../views/AppAbout.vue'
import AppContact from "../views/AppContact.vue"
import AppLegal from "../views/AppLegal.vue"
import AppUser from "../views/AppUser.vue"
import UserInfo from "../components/UserInfo.vue"
import AppPortfolio from "../views/AppPortfolio.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppUserList
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact
  },
  {
    path: '/legal',
    name: 'Legal',
    component: AppLegal
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: AppPortfolio
  },
  {
    path: '/users/:username',
    name: "Users",
    component: AppUser,
    children: [
        {
          path: "/user/:username/info",
          name: "Info",
          component: UserInfo
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
