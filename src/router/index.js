import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'componentMng' }
    },
    {
      path: '/component-mng',
      name: 'componentMng',
      component: Hello
    },
    {
      path: '/component-type-mng',
      name: 'componentTypeMng',
      component: Hello
    },
    {
      path: '/experiment-mng',
      name: 'experimentMng',
      component: Hello
    },
    {
      path: '/controller-mng',
      name: 'controllerMng',
      component: Hello
    },
    {
      path: '/menu-mng',
      name: 'menuMng',
      component: Hello
    }
  ]
})
