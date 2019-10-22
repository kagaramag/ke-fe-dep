<template>
  <div id="footer">
    <footer class="mt-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-3">
            <h4>Tutoring</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Find tutor</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Become a tutor</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Become a parent</router-link>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h4>Help</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Contact</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Report an issue</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">FAQs</router-link>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h4>Company</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Login</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Sign up</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">About</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Blog</router-link>
              </li>
            </ul>
          </div>

          <div class="col-3">
            <h4>Stay connected</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Facebook</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Twitter</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="`/${$i18n.locale}`">Instagram</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="copyright py-4">
        <div class="container">
          <span class="float-left">
            &copy; Copyright 2019 Smartela.com a
            <strong>Nivelo Ltd</strong> business. All Rights Reserved
          </span>
          <span class="float-right">
            <router-link :to="`/${$i18n.locale}`">Terms</router-link>
            <router-link :to="`/${$i18n.locale}`">Privacy</router-link>
            <router-link :to="`/${$i18n.locale}`">License</router-link>
          </span>
        </div>
        <div class="clear"></div>
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
.container {
  max-width: 980px !important;
}
.copyright {
  font-weight: 100;
  background: #212325 !important;
}
.copyright a {
  padding: 0 15px;
  color: #b6b6b6;
  font-weight: 100 !important;
}
</style>
