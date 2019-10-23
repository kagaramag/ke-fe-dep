<template>
  <div id="intro">
    <component :is="layout">
      <section class="clearfix">
        <div class="container d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-6 intro-info order-md-first order-last">
              <h2>
                {{$t('home.moto1')}}
                <br />
                {{$t('home.moto2')}}
                <span>{{$t('home.moto3')}}</span>

                <br />
                {{$t('home.moto4')}}
                <span>{{$t('home.moto5')}}</span>
              </h2>

              <div style="margin:20px 0;color:#565656">{{$t('home.welcome')}}</div>
              <div>
                <a href="#about" class="btn-get-started bg-primary scrollto">{{$t('home.button')}}</a>
              </div>
            </div>

            <div class="col-md-6 intro-img order-md-last order-first">
              <img
                src="./../../assets/images/next-level-01.png"
                style="max-width:450px"
                alt
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </component>
  </div>
</template>

<script>
import PostsComponent from "./posts/PostsComponent";
import { mapActions, mapGetters } from "vuex";
const default_layout = "default";
export default {
  components: {
    PostsComponent
  },
  name: "home",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.post-link {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #bdbdbd;
  margin: 0 auto;
  background: #ffffff;
  padding: 2%;
  width: 96%;
  position: relative;
}
.post-link a {
  display: block;
  text-align: center;
}

#intro {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #f5f8fd url("./../../assets/images/intro-bg.jpg") center top
    no-repeat;
  background-size: cover;
}

#intro .intro-info h2 {
  color: #413e66;
  margin-top: 100px;
  font-size: 48px;
  font-weight: 700;
}

#intro .intro-info h2 span {
  color: #1bb1dc;
}

#intro .intro-info .btn-get-started,
#intro .intro-info .btn-services {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  color: #fff;
}
</style>
