<template>
  <div class="mt-5">
    <footer class="footer mt-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>{{$t('footer.tutoring.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.tutoring.find')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>{{$t('footer.help.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">{{$t('footer.help.faqs')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>{{$t('footer.company.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}/login`">{{$t('footer.company.login')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}/register`">{{$t('footer.company.sign')}}</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}/blog`">{{$t('footer.company.blog')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>{{$t('footer.stay.title')}}</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <a
                  href="https://www.instagram.com/keetela/"
                  target="_blank"
                >{{$t('footer.stay.twitter')}}</a>
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
              Keetela,&nbsp;a
              <strong>Nivelo Ltd</strong> business. All Rights Reserved
            </div>
            <!-- <div class="col col-sm-12 col-md-6 col-lg-4">
              <router-link :to="`/${$i18n.locale}`">{{$t('copyright.terms')}}</router-link>
              <router-link  class="mx-3" :to="`/${$i18n.locale}`">{{$t('copyright.privacy')}}</router-link>
              <router-link :to="`/${$i18n.locale}`">{{$t('copyright.license')}}</router-link>
            </div>-->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterComponent"
};
</script>
<style scoped>
.footer {
  padding: 60px 0 0 0;
  background: #2e3033;
  border-top: 1px solid #ffffff;
  color: #c5c5c5;
}
.footer h4 {
  font-weight: 100 !important;
  color: #707070;
  font-size: 20px;
  margin-bottom: 24px;
}
.footer .list-group-item {
  background: none !important;
  border: none;
  padding: 5px 0;
}
.footer .list-group-item a {
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
