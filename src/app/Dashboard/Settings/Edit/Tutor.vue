<template>
  <div id="Parent">
    <h3>{{$t('userprofile.sidebar.profile.edit.tutor')}}</h3>
    <div>{{$t('userprofile.sidebar.profile.edit.tutoring')}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
const account_layout = "account";
export default {
  name: "Tutor",
  props: ["profile"]
};
</script>
