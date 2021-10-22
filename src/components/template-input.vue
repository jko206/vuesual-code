<template>
  <textarea
    type="text"
    v-model="elementType"
    placeholder="Element type"
    @input.enter="sendItUp"
  />
</template>

<script>
export default {
  name: "DetailsComp",
  data() {
    return {
      elementType: "",
    };
  },
  methods: {
    sendItUp() {
      this.$emit("set-element-type", this.elementType);
    },
  },
};
</script>

<style></style>
