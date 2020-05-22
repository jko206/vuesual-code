<template>
  <div v-if="componentType === 'div'" :style="styles">div</div>
  <button v-else-if="componentType === 'button'" :style="styles">button</button>
</template>

<script>
export default {
  name: "ComponentFactory",
  props: {
    componentType: {
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
