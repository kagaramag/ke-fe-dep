<template>
  <div
    class="shadow-2 bg-white radius-2 p-3 mt-4"
    slot-scope="articles"
    v-if="articles && articles.length"
  >
    <h4 class="my-2">Blog</h4>
    <div v-for="article in articles" :key="article.index" class="row my-3 radius-3 rounded">
      <div class="col-2">
        <div class="image image-identity">
          <img
            v-lazy="article.coverUrl ? `${CDN_IMAGE}/c_thumb,h_250,w_500/${article.coverUrl}` : avatar"
            class="card-img-top mb-2"
            :alt="article.title"
          />
        </div>
      </div>
      <div class="col-10">
        <h6 class="my-1">
          <router-link
            class="text-dark"
            :to="`/post/${article.category}/${article.slug}`"
          >{{article.title}}</router-link>
        </h6>

        <div class="py-2 my-2 text-muted">Posted on {{article.createdAt | date }}</div>
      </div>
      <div class="divider my-3 bg-gray"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBio",
  props: ["articles"]
};
</script>

<style>
.grab-bio .bio {
  font-weight: 100;
  color: #656565;
}

.image-identity img {
  max-width: 80px !important;
  margin: 15px auto;
  display: block;
}
</style>