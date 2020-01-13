<template>
  <div>
    <footer class="footer">
      <div class="container mb-5">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6">
            <div class="image">
              <router-link class="navbar-brand pl-1" :to="'/'">
                <img src="@/assets/images/logo_XII.svg" />
              </router-link>
            </div>
            <div class="my-3" style="max-width:300px">
              Keetela accelerates the acquisition of knowledge and skills necessary to achieve career advancement
              and personal growth.
            </div>
            <div class="social-media">
              <a href="https://www.twitter.com/keetela/" target="_blank">
                <icon :icon="[ 'fab', 'twitter' ]" class="icon" />
              </a>
              <a href="https://www.instagram.com/keetela/" target="_blank">
                <icon :icon="[ 'fab', 'linkedin' ]" class="icon" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3">
            <h4>About</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="'login'">Login</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="'register'">Register</router-link>
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
            <h4>More</h4>
            <ul class="list-unstyled">
              <li class="list-group-item">
                <router-link :to="'tutors'">Become a tutor</router-link>
              </li>
              <li class="list-group-item">
                <router-link :to="'tutors'">Find tutors</router-link>
              </li>
              <li class="list-group-item">
                <a href="https://codingclass.keetela.com/">Coding Class</a>
              </li>
              <li class="list-group-item">
                <router-link :to="'blog'">Blog</router-link>
              </li>
            </ul>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div class="clear"></div>
      <div class="copyright py-4">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              &copy;Copyright {{new Date().getFullYear()}},
              <b>Keetela</b> Ltd. All Rights Reserved
            </div>
            <div class="col text-center">
              <router-link :to="'terms'">Terms and Conditions</router-link>
              <router-link class="mx-3" :to="'policy-privacy'">Policy Privacy</router-link>
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
.footer .social-media a {
  color: #ffffff;
  font-size: 30px;
  margin-right: 15px;
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
