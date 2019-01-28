import ListBrand from '@/components/Brand/List.vue'
import ListArea from '@/components/Area/List.vue';
import ListProduct from '@/components/Product/List.vue';
import ListMovement from '@/components/Movement/List.vue';
import NewMovement from '@/components/Movement/NewMovement.vue';
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
        path: '/products',
        name: 'products',
        component: ListProduct
      },
      {
        path: '/areas',
        name: 'areas',
        component: ListArea
      },
      {
        path: '/movements',
        name: 'movements',
        component: ListMovement,
      },
      {
        path: '/movements/new',
        name: 'newMovement',
        component: NewMovement,
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