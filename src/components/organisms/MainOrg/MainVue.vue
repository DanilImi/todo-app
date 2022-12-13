<template lang="">
  <main>
    <div :class="$style.accordion">
      <div :class="$style.accordionTask" v-for="(faq, i) in faqBase" :key="i">
        <AccVueVue @click="closeAllFaq(faq)" :item="faq" />
        <div :class="[faq.open ? $style.visible : $style.invisible]">
          <AccVueVue v-for="data in dataMiniTask" :item="data" :key="data.id" />
          <InputTaskVue />
        </div>
      </div>
    </div>
    <InputFooterVue />
  </main>
</template>
<script>
import { ref } from "vue";
import AccVueVue from "../../molecules/Main/AccVue.vue";
import InputFooterVue from "../../atoms/MainAt/InputFooter.vue";
import InputTaskVue from "../../molecules/Main/InputTask.vue";

export default {
  components: {
    AccVueVue,
    InputFooterVue,
    InputTaskVue,
  },
  data() {
    return {
      variablesAcc: [
        { id: 1, value: "All" },
        { id: 2, value: "Active" },
        { id: 3, value: "Completed" },
      ],
      isCheck: "All",
      dataMiniTask: [
        { id: 1, value: "task", style: true },
        { id: 2, value: "task", style: true },
        { id: 3, value: "task", style: true },
        { id: 4, value: "task", style: true },
      ],
    };
  },
  setup() {
    const faqBase = ref([
      {
        value: "Task1",
        TaskItem: "Task2",
        open: false,
      },
      {
        value: "Task2",
        TaskItem: "Task3",
        open: false,
      },
    ]);
    const closeAllFaq = (item) => {
      if (!item.open) {
        faqBase.value.forEach((el) => (el.open = false));
      }
      item.open = !item.open;
    };

    return { faqBase, closeAllFaq };
  },
};
</script>
<style module lang="scss">
@import "./main.module.scss";
</style>
