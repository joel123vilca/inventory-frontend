import ListBrand from '@/components/Brand/List.vue'
import ListArea from '@/components/Area/List.vue';
import ListProduct from '@/components/Product/List.vue';
import ListChecks from '@/components/Checks/List.vue';
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
      path: '/areas/:id/checks',
      name: 'checks',
      component: ListChecks
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Brand/List.vue')
    }
  ]