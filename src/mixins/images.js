import Vue from 'vue';

Vue.mixin({
  data: function() {
    return {
      avatar: require('../assets/images/user.svg'),
      image: require('../assets/images/placeholer-1.jpg')
    };
  },
});
