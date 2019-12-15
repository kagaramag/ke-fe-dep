import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import posts from './modules/posts';
import users from './modules/users';
import education from './modules/education';
import tutoring from './modules/tutoring';
import tutorship from './modules/tutorship';
import legal from './modules/legal';
import blog from './modules/blog';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    posts,
    users,
    education,
    tutoring,
    tutorship,
    legal,
    blog
  }
});
