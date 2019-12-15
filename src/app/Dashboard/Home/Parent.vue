<template>
  <div>
    <div class="shadow-2 radius-2 p-3 mb-4">
      <h4 class="my-2">{{$t('dashboard.parent.title')}}</h4>
      <div class="my-2">{{$t('dashboard.parent.description')}}</div>
      <div class="my-3">
        <router-link
          :to="`/${$i18n.locale}/tutors`"
          class="btn bg-primary px-3 mr-1 mb-2 rounded text-light"
        >
          <icon icon="search" class="icon" />
          &nbsp;
          {{$t('dashboard.parent.button.search')}}
        </router-link>
        <router-link
          :to="`/${$i18n.locale}/dashboard/${type}/coaching`"
          class="btn bg-success px-3 mr-1 mb-2 rounded text-light"
        >
          <icon icon="child" class="icon" />
          &nbsp;
          {{$t('dashboard.parent.button.tutoring')}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "DashboardParentBox"
};
</script>