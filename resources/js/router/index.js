import Vue from 'vue'
import Router from 'vue-router'

const TheContainer = () => import('../containers/TheContainer');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: configRoutes()
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('user') && !to.path.startsWith('/login')) {
    next({path: '/login'})
  } else {
    return next()
  }
});

function configRoutes() {
  return [
    {
      path: '/login',
      name: 'Авторизация',
      component: () => import('../views/pages/Login')
    },
    {
      path: '/register',
      name: 'Регистрация',
      component: () => import('../views/pages/Register')
    },
    {
      path: '/',
      redirect: '/calcs',
      name: 'Главная',
      component: TheContainer,
      children: [
        {
          path: '/calcs',
          name: 'Мои расчеты',
          component: () => import('../views/calc/CalcIndex'),
        },
        {
          path: '/create',
          name: 'Добавить',
          component: () => import('../views/calc/CalcCreate'),
        },
        {
          path: 'calc/:id',
          name: 'Просмотр',
          component: () => import('../views/calc/CalcView'),
        }
      ]
    }
  ]
}

export default router
