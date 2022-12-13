<template lang="">
  <div
    :class="[
      item.style ? $style.task : $style.header,
      item.open ? $style.bRadius : '',
    ]"
  >
    <div :class="[$style.acc, item.style ? '' : $style.cPointer]">
      <div :class="$style.wrapperCheck">
        <input type="checkbox" id="scales" name="scales" />
        <span>{{ item.value }}</span>
      </div>
      <button><div :class="$style.btn"></div></button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style module lang="scss">
@import "./accvue.module.scss";
</style>
