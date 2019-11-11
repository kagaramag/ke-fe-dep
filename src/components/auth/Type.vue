<template>
  <component :is="layout">
    <div class="account-type">
      <h2 style="font-weight:none">{{$t('register.whoiam')}}</h2>
      <div class="box">
        <div class="row mx-2">
          <div class="col col-sm-12 col-md-12 col-lg-12 my-2">
            <router-link :to="`/${$i18n.locale}/register/tutor`">
              <div class="p-2 type-card">
                <h3 class="text-dark">{{$t('register.accountType.tutor.type')}}</h3>
                <div class="text-dark">{{$t('register.accountType.tutor.description')}}</div>
              </div>
            </router-link>
          </div>
          <div class="col col-sm-12 col-md-12 col-lg-12 my-2">
            <router-link :to="`/${$i18n.locale}/register/parent`">
            <div class="p-2 type-card">
              <h3 class="text-dark">{{$t('register.accountType.parent.type')}}</h3>
              <div class="text-dark">{{$t('register.accountType.parent.description')}}</div>
            </div>
            </router-link>
          </div>
        </div>
        <br />
        <div class="col text-center">
          {{$t('register.question')}}
          <router-link :to="`/${$i18n.locale}/login`">{{$t('register.login')}}</router-link>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
const minima_layout = "minima";
export default {
  name: "register",
  data() {
    return {
      accountType: "",
      user: {
        lastName: "",
        firstName: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || minima_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.account-type h1 {
  text-align: center;
  padding: 20px 0;
}
.account-type h2 {
  text-align: center;
  /* font-weight: 100!important; */
}
.account-type {
  margin-bottom: 50px;
}
.alert {
  width: 100%;
}
.type-card {
  border: 1px solid #dfdfdf;
  border-radius: 3px !important;
  background: #ffffff;
  cursor: pointer;
}
.is-selected {
  border: 1px solid #989898;
  background: #304894;
  color: #ffffff;
}
</style>
