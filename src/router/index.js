import Vue from "vue";
import Router from "vue-router";
import store from "./../store";
import i18n from "../i18n";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: `/${i18n.locale}`
    },
    {
      path: "/:lang",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/app/homepage")
        },
        {
          path: "tutors",
          name: "tutors",
          component: () => import("@/app/tutors")
        },
        {
          path: "register",
          component: () => import("@/components/auth/type")
        },
        {
          path: "register/:type",
          component: () => import("@/components/auth/register")
        },
        {
          path: "account-type/:username",
          component: () => import("@/components/auth/type")
        },
        {
          path: "dashboard/:type/identity",
          component: () => import("@/app/dashboard/tutorIdentity")
        },
        {
          path: "login",
          component: () => import("@/components/auth/login")
        },
        {
          path: "reset",
          component: () => import("@/components/auth/reset")
        },
        {
          path: "reset/:token",
          component: () => import("@/components/auth/reset")
        },
        {
          path: "confirm",
          component: () => import("@/components/auth/confirm")
        },
        {
          path: "@:username",
          name: "profile",
          component: () => import("@/app/profile")
        },
        {
          path: "dashboard/:type",
          name: "profile",
          component: () => import("@/app/dashboard/home"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/settings",
          name: "Profile Edit",
          component: () => import("@/app/dashboard/settings"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/coaching",
          name: "coaching",
          component: () => import("@/app/dashboard/tutoring"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/coaching/:id",
          name: "coaching",
          component: () => import("@/app/dashboard/tutorship"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/settings",
          name: "settings",
          component: () => import("@/app/dashboard/settings"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/my-blog",
          name: "blog",
          component: () => import("@/app/dashboard/blog")
        },
        {
          path: "post/:category/:slug",
          name: "post",
          component: () => import("@/app/blog/post")
        },
        {
          path: "blog",
          name: "blog",
          component: () => import("@/app/blog/blogs")
        },
        {
          path: "dashboard/:type/my-blog/compose",
          name: "blog-post",
          component: () => import("@/app/dashboard/blog/Create"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/my-blog/:slug/edit",
          name: "blog-post",
          component: () => import("@/app/dashboard/blog/Edit"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/education",
          name: "profile",
          component: () => import("@/app/dashboard/Education"),
          meta: {
            auth: true
          }
        },
        {
          path: "dashboard/:type/location",
          name: "profile",
          component: () => import("@/app/dashboard/Location"),
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: "*",
      component: () => import("@/app/notfound")
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
      next("login");
    }
  } else {
    next();
  }
});
export default router;
