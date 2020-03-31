import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import posts from './modules/posts';
import blog from './modules/blog';
import services from './modules/services';
import courses from './modules/courses';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    posts,
    blog,
    services,
    courses
  }
});
