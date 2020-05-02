<template>
  <div>
    <component :is="layout">
      <div class="grab-apply-cover d-flex align-items-center mb-4">
        <div class="py-4 px-2 text-center text-white">
          <h1>Become a tutor? <br> <span class="font-weight-bold">Apply now</span></h1>
          <div class="my-4">
            <div>Need help?</div>
            <div>Tel: +250-788-867-447 &bull; Email: support@keetela.com</div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="mb-2">
              <b>Keetela</b> is looking for skilled and experienced tutors who can coach various subjects including <b>Mathematics, English, French, Social studies, Sciences(SET)</b> and <b>Kinyarwanda</b>.<br>
              You must have good command of one or more of these subjects!<br>
              Lessons are currently held across the City of Kigali/Rwanda.
            </div>
            <div class="mb-2">
              <b>Position:</b><br>
              Part-time
            </div>
            <div class="mb-2">
              <b>Locations covered:</b><br>
              City of Kigali
            </div>
            <div class="mb-2">
              <b>Hours of Operation:</b><br>
              Depend on the availability of tutee
            </div>
            <div class="mb-2">
              <b>Salary:</b><br>
              Negotiable
            </div>
            <div class="mb-2">
              <b>Also Required:</b><br>
              <ul class="list-group list-group-flush">
                <li>&bull; Good communication ѕkіllѕ.</li>
                <li>&bull; Solid time management and organizational abilities.</li>
                <li>&bull; You need to be committed to a session if booked</li>
                <li>&bull; Friendly and approachable.</li>
                <li>&bull; Must be willing to undergo a criminal record clearance.</li>
                <li>&bull; Ability to Teach.</li>
                <li>&bull; <b>Spread the love!</b></li>
              </ul>
            </div>
            <div class="mb-4 mt-4">
            <a target="_blank" href="https://forms.gle/8X118M8qytjrA9538" class="btn btn-lg px-4 btn-success rounded shadow" >Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>
<script>
const default_layout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style scoped>

.grab-apply-cover {
  height: 60vh;
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781826/keetela/coaching-kig_zcln0d.jpg");
  background-attachment: scroll;
  background-position: center top;
  background-size: cover;
  position: relative;
}
.grab-apply-cover::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1;
}
.grab-apply-cover h1 {
  width: 100%;
  position: relative;
  z-index: 10;
}
.grab-apply-cover div {
  width: 100%;
  position: relative;
  z-index: 10;
}
.container {
  max-width: 750px!important
}
.list-group li {display: block; margin: 5px 0}
</style>