<template>
  <textarea type="text" v-model="styles" placeholder="styles" @keydown.enter="sendItUp"/>
</template>

<script>
const objectify = str => str.replace(/\n\s/g, '').split(';').map(line => line.split(/:\s*/).map(str => `"${str}"`))
export default {
  name: "Styles",
  data() {
    return {
      styles: ""
    };
  },
  methods: {
    sendItUp() {
      console.log("here");
      this.$emit("set-styles", JSON.parse(this.styles.trim()));
    }
  }
};
</script>

<style>
</style>
