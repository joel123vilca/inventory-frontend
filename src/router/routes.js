import ListBrand from '@/components/Brand/List.vue'
import ListArea from '@/components/Area/List.vue';
import ListProduct from '@/components/Product/List.vue';
import ListChecks from '@/components/Checks/List.vue';
import ListMovement from '@/components/Movement/List.vue';
import NewMovement from '@/components/Movement/NewMovement.vue';
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import Perfil from '@/views/Perfil.vue'

export default[
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/me',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
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
      path: '/areas/:id',
      name: 'checks',
      component: ListChecks
    },
    { path: '*', redirect: '/' }
  ]