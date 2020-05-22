<template>
  <textarea
    type="text"
    v-model="styles"
    placeholder="styles"
    @keydown.enter="sendItUp"
  />
</template>

<script>
const objectify = (str) => {
  str = str
    .split(";")
    .filter((item) => (item = item.trim()))
    .map((line) =>
      line
        .split(/:/)
        .map((str) => `"${str.trim()}"`)
        .join(":")
    )
    .join(",\n");
  console.log(str);
  return JSON.parse(`{${str}}`);
};
export default {
  name: "Styles",
  data() {
    return {
      styles: "",
    };
  },
  methods: {
    sendItUp() {
      let styles = objectify(this.styles);
      this.$emit("set-styles", styles);
    },
  },
};
</script>

<style>
textarea {
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  margin: 0;
}
</style>
