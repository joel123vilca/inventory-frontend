import ListBrand from '@/components/Brand/List.vue'
import Main from '@/views/Main.vue'

export default[
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
        path: '/brands',
        name: 'brands',
        component: ListBrand
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/Brand/List.vue')
    }
  ]