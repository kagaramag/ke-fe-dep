<template>
  <div id="intro">
    <!-- Welcome -->
    <section class="clearfix">
      <div class="container d-flex h-100">
        <div class="row">
          <div class="col-md-6 intro-info order-md-first order-last">
            <h2 class="mx-0 py-3">
              GROW
              <br />
              CONNECT
              <br />
              SPARK
              <br />
            </h2>

            <div class="text-white my-4">
              We connect learners with the best in-personal tutors/trainers
            </div>
            <div>
              <router-link
                :to="'tutors'"
                class="btn-get-started bg-white text-black radius-5 scrollto"
              >Get started</router-link>
            </div>
          </div>

          <div class="col-md-6 order-first p-5 my-5">
            <img src="@/assets/images/kid.png" style="max-width:550px;" alt class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <div class="plane-1"></div>
    <div class="plane-2"></div>
    <div class="stars"></div>
    <div class="sun"></div>
    <div class="noon"></div>
  </div>
</template>

<script>
export default {
  name: "HomeWelcome"
}
</script>


<style scoped>
.container {
  position: relative;
  z-index: 2;
}

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
  overflow: hidden;
  height: 65vh;
  position: relative;
  background: rgb(64, 62, 168);
  background: linear-gradient(
    180deg,
    rgba(64, 62, 168, 1) 33%,
    rgba(89, 111, 223, 1) 100%
  );
}
#intro::before {
  position: absolute;
  top: 110px;
  left: 60px;
  content: "";
  width: 120px;
  height: 120px;
  background: url("../../assets/images/noon.png");
  background-size: cover;
  -webkit-animation: noon 20s infinite;
  animation: noon 20s infinite;
}
#intro::after {
  position: absolute;
  top: 90px;
  right: 140px;
  content: "";
  width: 120px;
  height: 80px;
  background: url("../../assets/images/sun.png");
  background-size: 100% 100%;
}
#intro .intro-info h2 {
  color: #ffffff;
  margin-top: 130px;
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
.stars {
  width: 100%;
  height: 100%;
  top: 0;
  content: "";
  z-index: 0;
  position: absolute;
  background: url("../../assets/images/stars.png");
  background-position: 0 0;
  background-size: cover;
  opacity: 0.5;
}
.plane-1 {
  background: url("../../assets/images/plane-1.png");
  -webkit-animation: plane-1 35s infinite;
  animation: plane-1 35s infinite;
}

.plane-2 {
  background: url("../../assets/images/plane-1.png");
  -webkit-animation: plane-2 30s infinite;
  animation: plane-2 30s infinite;
  transform: rotate(-25deg);
}

.plane-1,
.plane-2 {
  width: 120px;
  height: 80px;
  top: 0;
  content: "";
  z-index: 0;
  position: absolute;
  background-position: 0 0;
  background-size: 100% 100%;
}

@keyframes plane-1 {
  0% {
    left: 20%;
    top: -40px;
  }

  30% {
    left: 60%;
    top: 30%;
  }

  100% {
    left: 105%;
    top: 50%;
  }
}

@keyframes plane-2 {
  0% {
    left: -70px;
    top: 40%;
  }

  100% {
    left: 105%;
    top: 15%;
  }
}
@keyframes noon {
  0% {
    transform: rotate(0);
  }
  33% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  66% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#section-parent {
  padding: 150px auto;
}
</style>
