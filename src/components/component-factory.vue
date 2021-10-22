<template>
  <div v-html="templateHtml" :style="styles"></div>
</template>

<script>
export default {
  name: "ComponentFactory",
  props: {
    templateHtml: {
      type: [String, null],
      required: true,
    },
    styles: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style></style>
