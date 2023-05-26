import Vue from 'vue'
import Router from 'vue-router'


import layout from '../layout'
import layout2 from '../layout-2'
import layout3 from '../Layout-3'


Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  base: '/demo/purple-free-vue/preview/demo_1/',
  routes: [
    {
      path: '/dashboard',
      component: layout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/pages/dashboard')
        }
      ]
    },
    {
      path: '/basic-ui',
      component: layout,
      children: [
        {
          path: 'buttons',
          name: 'buttons',
          component: () => import('@/pages/basic-ui/buttons')
        },
        {
          path: 'dropdowns',
          name: 'dropdowns',
          component: () => import('@/pages/basic-ui/dropdowns')
        },
        {
          path: 'typography',
          name: 'typography',
          component: () => import('@/pages/basic-ui/typography')
        }
      ]
    },
    {
      path: '/charts',
      component: layout,
      children: [
        {
          path: 'chartjs',
          name: 'chartjs',
          component: () => import('@/pages/charts/chartjs')
        },
      ]
    },
    {
      path: '/tables',
      component: layout,
      children: [
        {
          path: 'basic-tables',
          name: 'basic-tables',
          component: () => import('@/pages/tables/basic-tables')
        }
      ]
    },
    {
      path: '/auth-pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/samples/auth-pages/login')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/samples/auth-pages/register')
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('@/pages/samples/auth-pages/reset-password')
        },
        {
          path: 'forget-password',
          name: 'forget-password',
          component: () => import('@/pages/samples/auth-pages/forget-password')
        },
        {
          path: 'forget-password-confirm',
          name: 'forget-password-confirm',
          component: () => import('@/pages/samples/auth-pages/forget-password-confirm')
        }
      ]
    },
    {
      path: '/error-pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          name: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        },
        {
          path: 'error-500',
          name: 'error-500',
          component: () => import('@/pages/samples/error-pages/error-500')
        }
      ]
    },
    {
      path: '/icons',
      component: layout,
      children: [
        {
          path: 'mdi-icons',
          name: 'mdi-icons',
          component: () => import('@/pages/icons/mdi-icons')
        }
      ]
    },
    {
      path: '/patients',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'create',
          component: () => import('@/pages/patients/create')
        }
      ]
    },
    {
      path: '/patients',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/pages/patients/index')
        }
      ]
    },
    {
      path: '/patients',
      component: layout,
      children: [
        {
          path: 'update/:id(\\d+)',
          name: 'update',
          component: () => import('@/pages/patients/update'),
          props: true
        }
      ]
    },
    {
      path: '/',
      component: layout2,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/dashboard/home')
        }
      ]
    },
    {
      path: '/accueil',
      component: layout3,
      children: [
        {
          path: '/accueil',
          name: 'accueil',
          component: () => import('@/pages/accueil/accueil')
        }
      ]
    },
    {
      path: '/payement',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'create-payement',
          component: () => import('@/pages/paiement/create')
        }
      ]
    },
    {
      path: '/payement',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'list-payement',
          component: () => import('@/pages/paiement/index')
        }
      ]
    },
    {
      path: '/eph',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'eph-create',
          component: () => import('@/pages/centre-sante/create')
        }
      ]
    },
    {
      path: '/eph',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'eph-list',
          component: () => import('@/pages/centre-sante/index')
        }
      ]
    },
    {
      path: '/actes-medicaux',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'actes-create',
          component: () => import('@/pages/actes-medicaux/create')
        }
      ]
    },
    {
      path: '/actes-medicaux',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'actes-list',
          component: () => import('@/pages/actes-medicaux/index')
        }
      ]
    },


    {
      path: '/user',
      component: layout,
      children: [
        {
          path: 'create',
          name: 'users-create',
          component: () => import('@/pages/user/create')
        }
      ]
    },


    {
      path: '/user',
      component: layout,
      children: [
        {
          path: 'list',
          name: 'users-list',
          component: () => import('@/pages/user/index')
        }
      ]
    },

    {
      path: '/user',
      component: layout,
      children: [
        {
          path: 'role/create',
          name: 'role-create',
          component: () => import('@/pages/user/role/create')
        }
      ]
    },

    {
      path: '/user',
      component: layout,
      children: [
        {
          path: 'role/list',
          name: 'role-list',
          component: () => import('@/pages/user/role/index')
        }
      ]
    },

    
    {
      path: '/user',
      component: layout,
      children: [
        {
          path: 'role/permissions',
          name: 'role-permissions',
          component: () => import('@/pages/user/permissions/index')
        }
      ]
    },


    {
      path: '/tresorerie',
      component: layout,
      children: [
        {
          path: 'encaissement',
          name: 'encaissement-create',
          component: () => import('@/pages/tresorerie/encaissement/create')
        }
      ]
    },
    {
      path: '/tresorerie',
      component: layout,
      children: [
        {
          path: 'decaissement',
          name: 'decaissement-create',
          component: () => import('@/pages/tresorerie/decaissement/create')
        }
      ]
    },
    {
      path: '/tresorerie',
      component: layout,
      children: [
        {
          path: 'list-encaissement',
          name: 'list-encaissement',
          component: () => import('@/pages/tresorerie/encaissement/index')
        }
      ]
    },
    {
      path: '/tresorerie',
      component: layout,
      children: [
        {
          path: 'list-decaissement',
          name: 'list-decaissement',
          component: () => import('@/pages/tresorerie/decaissement/index')
        }
      ]
    },
    {
      path: '/rapport',
      component: layout,
      children: [
        {
          path: '/rapport',
          name: 'rapport',
          component: () => import('@/pages/rapport/index')
        }
      ]
    },

    {
      path: '*',
      redirect: '/error-404',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'error-404',
          component: () => import('@/pages/samples/error-pages/error-404')
        }
      ]
    }
  ]
})
