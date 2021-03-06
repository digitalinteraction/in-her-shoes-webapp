import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from "./views/Auth.vue";
import UserStories from "./views/UserStories.vue";
import Admin from "./views/Admin";
import ViewStory from "./views/ViewStory.vue";
import Stories from "./views/Stories.vue";
import Messages from "./views/Messages.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "/user/stories",
      name: "userStories",
      component: UserStories
    },
    {
      path: "/stories",
      name: "stories",
      component: Stories
    },
    {
      path: "/story/:id",
      name: "story",
      component: ViewStory
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/messages",
      name: "messages",
      component: Messages
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
