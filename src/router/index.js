import Vue from 'vue';
import Router from 'vue-router';
import store from './../store';
import i18n from '../i18n';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render(c) {
          return c('router-view');
        }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/components/public/home')
        },
        {
          path: 'tutors',
          name: 'tutors',
          component: () => import('@/pages/tutors')
        },
        {
          path: 'register',
          component: () => import('@/components/auth/type')
        },
        {
          path: 'register/:type',
          component: () => import('@/components/auth/register')
        },
        {
          path: 'account-type/:username',
          component: () => import('@/components/auth/type')
        },
        {
          path: 'profile/:username/identity',
          component: () => import('@/pages/profile/tutorIdentity')
        },
        {
          path: 'login',
          component: () => import('@/components/auth/login')
        },
        {
          path: 'reset',
          component: () => import('@/components/auth/reset')
        },
        {
          path: 'reset/:token',
          component: () => import('@/components/auth/reset')
        },
        {
          path: 'confirm',
          component: () => import('@/components/auth/confirm')
        },
        {
          path: 'profile/:username',
          name: 'profile',
          component: () => import('@/pages/profile')
        },
        {
          path: 'profile/:username/settings',
          name: 'Profile Edit',
          component: () => import('@/pages/profile/settings'),
          meta: {
            auth: true
          }
        },

        {
          path: 'profile/:username/coaching',
          name: 'coaching',
          component: () => import('@/pages/profile/tutoring'),
          meta: {
            auth: true
          }
        },
        {
          path: 'profile/:username/coaching/:id',
          name: 'coaching',
          component: () => import('@/pages/profile/tutorship'),
          meta: {
            auth: true
          }
        },
        {
          path: 'profile/:username/settings',
          name: 'settings',
          component: () => import('@/pages/profile/settings'),
          meta: {
            auth: true
          }
        },
        {
          path: 'profile/:username/my-blog',
          name: 'blog',
          component: () => import('@/pages/profile/blog')
        },
        {
          path: 'post/:slug',
          name: 'post',
          component: () => import('@/components/public/posts/OnePost')
        },
        {
          path: '/profile/:username/education',
          name: 'profile',
          component: () => import('@/pages/profile/Education'),
          meta: {
            auth: true
          }
        },
        // {
        //   path: '/profile/:username/education/new',
        //   name: 'profile',
        //   component: () => import('@/pages/profile/education'),
        //   meta: {
        //     auth: true
        //   }
        // },
      ]
    },
    {
      path: '*',
      component: () => import('@/components/public/notfound')
    }
  ],
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem('isAuth') === 'true') {
      next();
      return;
    } else {
      next('login');
    }
  } else {
    next();
  }
});
export default router;
