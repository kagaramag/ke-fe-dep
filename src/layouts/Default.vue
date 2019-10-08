<!-- 
####### DEFAULT LAYOUT #######
"Layout for public pages, it only contains header" 
##############################
-->
<script>
import HeaderComponent from "@/components/commons/Header";
import FooterComponent from "@/components/commons/Footer";
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>
<template>
  <div>
    <HeaderComponent />
      <div class="container">
        <slot />
      </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
.container{
  margin-top: 100px;
}
</style>