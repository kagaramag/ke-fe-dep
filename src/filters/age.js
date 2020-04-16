import Vue from 'vue';

Vue.filter("age", function(value) {
  if (!value) return "";
  return 4;
});
