<template>
  <div>
    <component :is="layout">
      <section id="training" class="m-0 bg-light">
        <div class="grab-bg-page training-cover d-flex align-items-center">
          <div class="container">
            <div class="py-4 px-2 text-white">
              <h1>Training</h1>
              <h2 class="text-light mb-3">
                Training solutions for individuals, organizations and businesses
              </h2>
              <h3 class="font-weight-light mb-3">
                We offers a wide range of lifelong-learning solutions to choose from: in a training centre or in companies 
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section class="py-4">
        <div class="container">
          <h1 class="text-center text-primary font-weight-light my-4">
            How Our
            <br />
            <span class="bold">Training Services</span><br />
            Works!
          </h1>
          <div class="row tutoring-steps">
            <div class="col-sm-12 col-md-6">
              <div class="image">
                <img
                  src="./../../../assets/images/tutoring-connect.svg"
                  alt="connect"
                  class="float-right"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <h2>Connect</h2>
              <h3 class="font-weight-light">With the best tutor</h3>
              <div>
                Specify your preferred subject, grade, area, and price range and
                get a list of matching tutors. Enquire with the ones you like
                and wait to hear back.
              </div>
            </div>
            <div class="py-5 w-100"></div>
            <div class="col-sm-12 col-md-6 text-right">
              <h2>Discuss</h2>
              <h3 class="font-weight-light">Working Terms</h3>
              <div>
                Specify your preferred subject, grade, area, and price range and
                get a list of matching tutors. Enquire with the ones you like
                and wait to hear back.
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="image">
                <img
                  src="./../../../assets/images/tutoring-terms.svg"
                  alt="connect"
                  class="float-left"
                />
              </div>
            </div>
            <div class="py-5 w-100"></div>
            <div class="col-sm-12 col-md-6">
              <div class="image">
                <img
                  src="./../../../assets/images/tutoring-enjoy.svg"
                  alt="connect"
                  class="float-right"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <h2>Experience</h2>
              <h3 class="font-weight-light">noticeable growth</h3>
              <div>
                Specify your preferred subject, grade, area, and price range and
                get a list of matching tutors. Enquire with the ones you like
                and wait to hear back.
              </div>
            </div>
          </div>
        </div>
      </section>
    </component>
  </div>
</template>

<script>
const default_layout = "default";
export default {
  metaInfo: {
    title: "Training solutions for individuals, organizations and businesses",
    titleTemplate: "%s - | Keetela.com | Igniting minds for success!",
    meta: [
      {
        name: "description",
        content:
          "We offers a wide range of lifelong-learning solutions to choose from: in a training centre or in companies/organizations, on-site or via distance learning, leading to certificates"
      },
      {
        name: "keywords",
        content: "Training, Institutions, Organizations, Professionals, Business, Training topics, Accounting, Career guidance, Business strategy"
      }
    ]
  },
  name: "training",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.training-cover {
  background-image: url("../../../assets/images/training-cover.jpg");
}
.mentorship-for-everyone img {
  width: 160px;
  margin: 0 auto;
  display:block;
  height: auto;
}
.tutoring-steps {
  padding: 45px 0;
  position: relative;
}
.tutoring-steps::before {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 1px;
  height: 100%;
  background: #cdcdcd;
  position: absolute;
}
.tutoring-steps img {
  width: 120px;
}
</style>
