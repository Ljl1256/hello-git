import { createRouter, createWebHistory } from 'vue-router'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
import Sx from '../views/Sx.vue'
import Sb from '../views/Sb.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:aaa',
      component:PageA,
      children:[
        {
          name:'sb1',
          path:':aa' ,
          components:{
            default:PageB,
            hh:Sb,
            
          }
        },
        {
          path:'a' ,
          component:Sx,
          name:'sx1'
        },
      ]
    },
    {
      path: '/bbb',
      component: PageB,
      children:[
        {
          path:'a' ,
          component:Sx,
          name:'sx1'
        },
      ]
    }
  ]
})

export default router
