<template>
  <div id="footer" class="mt-5">
    <footer class="mt-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col col-sm-6 col-md-3">
            <h4>{{$t('footer.tutoring.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.tutoring.find')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.tutoring.tutor')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.tutoring.parent')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col col-sm-6 col-md-3">
            <h4>{{$t('footer.help.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.help.contact')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.help.report')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.help.faqs')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col col-sm-6 col-md-3">
            <h4>{{$t('footer.company.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.company.login')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.company.sign')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.company.about')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.company.blog')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col col-sm-6 col-md-3">
            <h4>{{$t('footer.stay.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.stay.facebook')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.stay.twitter')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.stay.instagram')}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="copyright py-4">
        <div class="container">
          <div class="row">
            <div class="col col-sm-12 col-md-6 col-lg-8">
              &copy;Copyright 2019
              <router-link class="radius-3 px-2 mx-2 bg-light text-dark" :to="'/'">Keetela.com</router-link>a
              <strong>Nivelo Ltd</strong> business. All Rights Reserved
            </div>
            <div class="col col-sm-12 col-md-6 col-lg-4">
              <router-link :to="`/${$i18n.locale}`">{{$t('copyright.terms')}}</router-link>
              <router-link  class="mx-3" :to="`/${$i18n.locale}`">{{$t('copyright.privacy')}}</router-link>
              <router-link :to="`/${$i18n.locale}`">{{$t('copyright.license')}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "footer"
};
</script>
<style scoped>
#footer {
  padding: 60px 0 0 0;
  background: #2e3033;
  border-top: 1px solid #ffffff;
  color: #c5c5c5;
}
#footer h4 {
  font-weight: 100 !important;
  color: #707070;
  font-size: 20px;
  margin-bottom: 24px;
}
#footer .list-group-item {
  background: none !important;
  border: none;
  padding: 5px 0;
}
#footer .list-group-item a {
  color: #b6b6b6;
  font-weight: 100 !important;
}
.copyright {
  font-weight: 100;
  background: #212325 !important;
}
.copyright a {
  color: #b6b6b6;
  font-weight: 100 !important;
}
</style>
