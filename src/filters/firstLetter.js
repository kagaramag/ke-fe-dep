import Vue from 'vue';

Vue.filter("firstLetter", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase();
});

