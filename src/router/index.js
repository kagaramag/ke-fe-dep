import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// initiate all routes
const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/app/homepage")
    },
    {
      path: "/contact",
      name: "contact-us",
      component: () => import("@/app/contact")
    },
    {
      path: "/codingclass",
      name: "apply-for-tutor",
      component: () => import("@/app/services/codingclass")
    },
    {
      path: "/tutors",
      name: "service-tutoring",
      component: () => import("@/app/services/tutoring")
    },
    {
      path: "/tutors/apply",
      name: "tutor-apply",
      component: () => import("@/app/apply/tutor")
    },
    {
      path: "/mentors",
      name: "service-mentoring",
      component: () => import("@/app/services/mentoring")
    },
    {
      path: "/training",
      name: "service-training",
      component: () => import("@/app/services/training")
    },
    {
      path: "/tutoring-courses",
      name: "help-mentoring",
      component: () => import("@/app/help/courses")
    },
    {
      path: "/a/:slug",
      name: "post",
      component: () => import("@/app/blog/post")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/app/blog/blogs")
    },
    {
      path: "*",
      component: () => import("@/app/notfound/PageNotFound")
    }
  ],
  linkExactActiveClass: "is-active",
});

export default router;
