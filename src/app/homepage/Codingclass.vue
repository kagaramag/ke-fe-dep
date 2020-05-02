<template>
  <div id="coding-class">
    <section class="clearfix">
      <div class="container" style="height:500px">
        <div class="row align-items-center h-100">
          <div class="col-12">
            <div class="justify-content-center align-self-center text-center text-white">
              <h1 class="font-weight-light">Keetela Coding Class</h1>
              <h5 class="py-2 font-weight-light">
                Coding for young generation is growing rapidly in popularity as it is a new form of literacy in this new technological era.<br>
                Coding with us will truly make you ready for personal growth and set you up for<br>outstanding world-class software engineer.
              </h5>
              <div class="py-2">
                <router-link
                  class="btn btn-lg btn-success rounded-pill px-5"
                  :to="'/codingclass'"
                >Join us now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#coding-class {
  width: 100%;
  overflow: hidden;
  height: 75vh;
  position: relative;
  background: url("https://res.cloudinary.com/ninjas/image/upload/v1585781829/keetela/computer_bgi9wm.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#coding-class::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(50, 73, 148, 0.75);
}
</style>
