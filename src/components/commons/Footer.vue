<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>Tutoring</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="'tutors'">Find tutors</router-link>
              </li>
              <li class="list-group-item">
                <a href="https://codingclass.keetela.com/">Coding Class</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>Help</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="'blog'">Blog</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="'support'">Supports</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="'contact'">Contact</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>Company</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="'login'">Login</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="'register'">Register</router-link>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>Stay connected</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <a
                  href="https://www.twitter.com/keetela/"
                  target="_blank"
                > <icon :icon="[ 'fab', 'twitter' ]"  class="icon" />  Twitter</a>
              </li>
              <li class="list-group-item">
                <a
                  href="https://www.instagram.com/keetela/"
                  target="_blank"
                > <icon :icon="[ 'fab', 'linkedin' ]"  class="icon" /> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="copyright py-4">
        <div class="container">
          <div class="row">
            <div class="col col-sm-12 col-md-12 col-lg-12">
              &copy;Copyright {{new Date().getFullYear()}},
              <b>Keetela</b> Ltd. All Rights Reserved
            </div>
            <div class="col col-sm-12 col-md-6 col-lg-4">
              <router-link :to="'terms'">Terms and Conditions</router-link>
              <router-link  class="mx-3" :to="'policy-privacy'">Policy Privacy</router-link>
            </div>
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
  background: #111030;
  color: #c5c5c5;
}
.footer h4 {
  font-weight: 100 !important;
  color: #6e779c;
  font-size: 20px;
  margin-bottom: 24px;
}
.footer .list-group-item {
  background: none !important;
  border: none;
  padding: 5px 0;
}
.footer .list-group-item a {
  color: #a9b0c8;
  font-weight: 100 !important;
}
.copyright {
  font-weight: 100;
  background: #0d0c1a !important;
}
.copyright a {
  color: #b6b6b6;
  font-weight: 100 !important;
}
</style>
