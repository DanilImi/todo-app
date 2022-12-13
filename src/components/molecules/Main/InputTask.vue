<template lang="">
  <div :class="$style.inputTask">
    <button>+</button>
    <input
      type="text"
      id="AddTask"
      name="AddTask"
      placeholder="Add a new task"
    />
  </div>
</template>
<script>
export default {};
</script>
<style module lang="scss">
@import "./inputTask.module.scss";
</style>
