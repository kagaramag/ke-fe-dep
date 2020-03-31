import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/app/Homepage")
    },
    {
      path: "/contact",
      name: "contact-us",
      component: () => import("@/app/Contact")
    },
    {
      path: "/codingclass",
      name: "apply-for-tutor",
      component: () => import("@/app/Services/Codingclass")
    },
    {
      path: "/tutoring",
      name: "service-tutoring",
      component: () => import("@/app/Services/Tutoring")
    },
    {
      path: "/mentoring",
      name: "service-mentoring",
      component: () => import("@/app/Services/Mentoring")
    },
    {
      path: "/training",
      name: "service-training",
      component: () => import("@/app/Services/Training")
    },
    {
      path: "/tutoring-courses",
      name: "help-mentoring",
      component: () => import("@/app/Help/Courses")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/app/Blog/Blogs")
    },
    {
      path: "*",
      component: () => import("@/app/NotFound/PageNotFound")
    }
  ],
  linkExactActiveClass: "is-active",
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem("isAuth") === "true") {
      next();
      return;
    } else {
      next({
        path: '/login',
        query: {
          url: to.path
        }
      });
    }
  } else {
    next();
  }
});

export default router;
