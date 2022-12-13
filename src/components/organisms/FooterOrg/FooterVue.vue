<template lang="">
  <footer>
    <DataTask />
    <div>
      <InputRadioVue
        v-for="item in variablesInput"
        :item="item"
        :key="item.id"
        v-model="isCheck"
      />
    </div>
  </footer>
</template>
<script>
import DataTask from "@/components/atoms/FooterAt/DataTask.vue";
import InputRadioVue from "../../molecules/FooterMol/InputRadio.vue";
export default {
  components: {
    InputRadioVue,
    DataTask,
  },
  data() {
    return {
      variablesInput: [
        { id: 1, value: "All" },
        { id: 2, value: "Active" },
        { id: 3, value: "Completed" },
      ],
      isCheck: "All",
    };
  },
};
</script>
<style module lang="scss">
@import "./footer.module.scss";
</style>
