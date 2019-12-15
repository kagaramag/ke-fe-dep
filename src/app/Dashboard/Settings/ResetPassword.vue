<template>
  <div id="Parent">
    <h4 class="my-4">{{$t('settings.reset.title')}}</h4>
    <div>{{$t('settings.reset.description')}} 
      <router-link :to="`/${$i18n.locale}/reset`">{{$t('settings.reset.here')}}</router-link>

    </div>
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