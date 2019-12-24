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
      path: "/tutors",
      name: "tutors",
      component: () => import("@/app/Tutors")
    },
    {
      path: "/register",
      component: () => import("@/components/auth/Type")
    },
    {
      path: "/register/:type",
      component: () => import("@/components/auth/Register")
    },
    {
      path: "/account-type/:username",
      component: () => import("@/components/auth/Type")
    },
    {
      path: "/login",
      component: () => import("@/components/auth/Login")
    },
    {
      path: "/reset",
      component: () => import("@/components/auth/Reset")
    },
    {
      path: "/reset/:token",
      component: () => import("@/components/auth/Reset")
    },
    {
      path: "/confirm",
      component: () => import("@/components/auth/Confirm")
    },
    {
      path: "/@:username",
      name: "profile",
      component: () => import("@/app/Profile")
    },
    {
      path: "/dashboard/:type",
      name: "profile",
      component: () => import("@/app/Dashboard/Home"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/settings",
      name: "Profile Settings",
      component: () => import("@/app/Dashboard/Shared/Settings"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/coaching",
      name: "coaching",
      component: () => import("@/app/Dashboard/Tutoring"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/coaching/:id",
      name: "coaching",
      component: () => import("@/app/Dashboard/Tutorship"),
      meta: {
        auth: true
      }
    },
    {
      path: "/post/:category/:slug",
      name: "post",
      component: () => import("@/app/Blog/Post")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/app/Blog/Blogs")
    },
    {
      path: "/dashboard/:type/my-blog/compose",
      name: "blog-post",
      component: () => import("@/app/Dashboard/Shared/Blog/Create"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/my-blog",
      name: "blog",
      component: () => import("@/app/Dashboard/Shared/Blog")
    },
    {
      path: "/dashboard/:type/my-blog/:slug/edit",
      name: "blog-post",
      component: () => import("@/app/Dashboard/Shared/Blog/Edit"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/tutor-application",
      name: "profile",
      component: () => import("@/app/Dashboard/Tutors/Profile"),
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard/:type/hiring/:username",
      name: "profile",
      component: () => import("@/app/Dashboard/Hiring"),
      meta: {
        auth: true
      }
    },
    {
      path: "*",
      component: () => import("@/app/NotFound")
    }
  ],
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
