<template>
  <div id="profile-bio" class="grab-bio mt-2" slot-scope="user">
    <h3 style="font-weight:normal;">Hi, I am {{user.firstName}}</h3>
    <div class="bio mt-2" v-html="user.bio"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileBio",
  props: ["user"]
}
</script>

<style>
.grab-bio .bio {
  font-weight: 100;
  color: #656565
}
</style>