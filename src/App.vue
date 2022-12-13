<template>
  <HeaderVue />
  <MainVue />
  <FooterVue />
</template>
<script>
import HeaderVue from "@/components/atoms/HeaderAt/HeaderVue.vue";
import MainVue from "@/components/organisms/MainOrg/MainVue.vue";
import FooterVue from "@/components/organisms/FooterOrg/FooterVue.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
    MainVue,
  },
};
</script>
<style module lang="scss"></style>
