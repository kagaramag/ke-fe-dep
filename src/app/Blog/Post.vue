<template>
  <div>
    <component :is="layout">
      <div class="container">
        <div class="row py-0 px-3">
          <h1 class="mt-1 mb-3">{{article.title}}</h1>
          <div class="col-sm-12 col-md-8 col-lg-8 p-0 article-body">
            <div class="mb-3">
              <span class="float-left"  v-if="article && article.author">
                Posted
                <b>{{ article.createdAt | date }}</b> by
                <router-link :to="`/@${article.author.username}`">
                  <b>{{article.author.firstName}} {{article.author.lastName}}</b>
                </router-link>
                <div>
                  Read time:
                  <b>{{article.readTime == 0 ? 'less than a munite' : `${article.readTime} minutes`}}</b>
                </div>
              </span>
              <span class="float-right p-2">
                <!-- share buttons  -->
              </span>
            </div>
            <div class="clear"></div>
            <div class="mt-3" v-html="article.body"></div>
            <div class="my-4 article-quick-link bg-light py-4 px-3 shadow-2 radius-1" v-if="auth && auth.id === article.userId">
              <div class="pb-2">You wrote this article</div>
              <router-link
                :to="`/dashboard/${accountType}/my-blog/${article.slug}/edit`"
                class="radius-1  btn btn-success"
              >
                <icon class="icon" icon="pen" />&nbsp;Edit this post
              </router-link>
              <router-link
                :to="`/dashboard/${accountType}/my-blog`"
                class="radius-1 btn btn-primary"
              >
                <icon class="icon" icon="signature" />&nbsp;My blog
              </router-link>
              <router-link
                :to="`/dashboard/${accountType}`"
                class="radius-1  btn btn-primary"
              >
                <icon class="icon" icon="stream" />&nbsp;Dashboard
              </router-link>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <img
              src="@/assets/images/coding-class-1.jpg"
              class="img-fluid img-thumbnail rounded"
              alt="Coding Class Ads"
            />
          </div>
        </div>
      </div>
    </component>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
const default_layout = "default";

export default {
  name: "OnePost",
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.FETCH_ONE_POST(this.slug);
    this.loaded = true;
  },
  computed: {
    article() {
      const fetch_post = this.$store.getters.fetch_post;
      return fetch_post.article;
    },
    auth() {
      return JSON.parse(localStorage.getItem("user"));
    },
    ...mapGetters(["fetch_post"]),
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  methods: {
    ...mapActions(["FETCH_ONE_POST"])
  }
};
</script>

<style scoped>

</style>
