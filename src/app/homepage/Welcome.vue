<template>
  <div id="intro">
    <section class="clearfix">
      <div class="container" style="height:500px">
        <div class="row align-items-center h-100">
          <div class="col-12">
            <div class="justify-content-center text-light align-self-center">
              <h1 class="py-3 bold">
                We
                <span class="stress-underline">Develop</span> &amp;
                <span class="stress-underline">Deliver</span> World-class Learning Programs
              </h1>
              <h2 class="text-light h3 font-weight-light mb-3">
                Welcoming everyone in online &amp; offline learning experience built &amp; delivered on top of
                <span
                  class="bold"
                >digital solutions</span>
              </h2>
              <h3 class="font-weight-light h5 text-light">Everyone has something to share.</h3>
            </div>
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
};
</script>


<style scoped>
.container {
  position: relative;
  z-index: 2;
}
.welcome-none {
  height: 65vh;
}
.stress-underline {
  position: relative;
}
.stress-underline::before {
  position: absolute;
  content: "";
  bottom: -2px;
  left: 0;
  height: 4px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
}
#intro {
  width: 100%;
  overflow: hidden;
  height: 75vh;
  position: relative;
  background-image: url("./../../assets/images/person-tutoring.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#intro::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 26, 0.8);
}
#intro h2 {
  color: #8f8e8e;
  font-weight: 700;
  max-width: 700px;
}
#intro h1 {
  max-width: 900px;
}
#intro .welcome-note h3 {
  color: #ffffff;
  font-size: 32px;
  font-weight: 100;
}

#intro .welcome-note h2 span {
  color: #1bb1dc;
}

.stars {
  width: 100%;
  height: 100%;
  top: 0;
  content: "";
  z-index: 0;
  position: absolute;
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781818/keetela/stars_iylxbc.png");
  background-position: 0 0;
  background-size: cover;
  opacity: 0.5;
}
.plane-1 {
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781846/keetela/plane-1_qxkpmj.png");
  -webkit-animation: plane-1 35s infinite;
  animation: plane-1 35s infinite;
}

.plane-2 {
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781846/keetela/plane-1_qxkpmj.png");
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

@media only screen and (max-width: 991px) {
  #intro {
    height: 95vh;
  }
}

#section-parent {
  padding: 150px auto;
}
</style>
