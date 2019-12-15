<template>
  <div>
    <div class="shadow-2 radius-2 p-3 mb-4">
      <h4 class="my-2">{{$t('dashboard.tutor.title')}}</h4>
      <div class="my-2">{{$t('dashboard.tutor.description')}}</div>
      <div class="my-3">
        <router-link
          :to="`/${$i18n.locale}/dashboard/${type}/location`"
          class="btn bg-primary px-3 mr-1 mb-2 rounded text-light"
        >
          <icon icon="map-marker-alt" class="icon" />
          &nbsp;
          {{$t('dashboard.tutor.button.location')}}
        </router-link>
        <router-link
          :to="`/${$i18n.locale}/dashboard/${type}/identity`"
          class="btn bg-primary px-3 mr-1 mb-2 rounded text-light"
        >
          <icon icon="folder" class="icon" />
          &nbsp;
          {{$t('dashboard.tutor.button.legal')}}
        </router-link>
        <router-link
          :to="`/${$i18n.locale}/dashboard/${type}/education`"
          class="btn bg-success px-3 mr-1 mb-2 rounded text-light"
        >
          <icon icon="graduation-cap" class="icon" />
          &nbsp;
          {{$t('dashboard.tutor.button.education')}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardTutorBox"
};
</script>