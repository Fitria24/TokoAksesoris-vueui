import { createRouter, createWebHashHistory } from 'vue-router'
import Produk from '../views/produks/Produk.vue'
import Createproduks from '../views/produks/Createproduks.vue'
import Editproduks from '../views/produks/Editproduks.vue'
import Detailproduks from '../views/produks/Detailproduks.vue'
import Pembeli from '../views/pembelis/Pembeli.vue'
import Createpembelis from '../views/pembelis/Createpembelis.vue'
import Editpembelis from '../views/pembelis/Editpembelis.vue'
import Detailpembelis from '../views/pembelis/Detailpembelis.vue'
import Suplier from '../views/supliers/Suplier.vue'
import Createsupliers from '../views/supliers/Createsupliers.vue'
import Editsupliers from '../views/supliers/Editsupliers.vue'
import Detailsupliers from '../views/supliers/Detailsupliers.vue'

const routes = [
  {
    path: '/produks',
    name: 'Produk',
    component: Produk
  },
  {
    path: '/createproduks',
    name: 'Createproduk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproduks
  },
  {
    path: '/editproduks/:id',
    name: 'Editproduks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editproduks
  },
  {
    path: '/detailproduks/:id',
    name: 'Detailproduks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailproduks
  },
  {
    path: '/pembelis',
    name: 'Pembeli',
    component: Pembeli
  },
  {
    path: '/createpembelis',
    name: 'Createpembeli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpembelis
  },
  {
    path: '/editpembelis/:id',
    name: 'Editpembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpembelis
  },
  {
    path: '/detailpembelis/:id',
    name: 'Detailpembelis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpembelis
  },
  {
    path: '/supliers',
    name: 'Suplier',
    component: Suplier
  },
  {
    path: '/createsupliers',
    name: 'Createsuplier',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsupliers
  },
  {
    path: '/editsupliers/:id',
    name: 'Editsupliers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsupliers
  },
  {
    path: '/detailsupliers/:id',
    name: 'Detailsupliers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailsupliers
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router