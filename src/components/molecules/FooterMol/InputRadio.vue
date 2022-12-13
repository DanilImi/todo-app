<template lang="">
  <div :class="$style.footerInput">
    <input
      type="radio"
      :id="item.id"
      name="Filter"
      :value="item.value"
      @change="$emit('update:modelValue', $event.target.value)"
      :checked="item.value === modelValue"
    />
    <label :for="item.id">{{ item.value }}</label>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    modelValue: { String, default: null },
  },
};
</script>
<style module lang="scss">
@import "./inputRadio.module.scss";
</style>
