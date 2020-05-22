<template>
  <div v-if="componentType === 'div'" :style="style">div</div>
  <button v-else-if="componentType === 'button'" :style="style">button</button>
</template>

<script>
export default {
  name: "ComponentFactory",
  props: {
    componentType: {
      type: [String || null],
      required: true
    },
    style: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
</style>
