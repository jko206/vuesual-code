<template>
  <div id="app">
    <MainLayout>
      <template v-slot:menu-bar>Menu bar</template>
      <template v-slot:file-system>file system</template>
      <template v-slot:main-display>
        <ComponentFactory :componentType="elementType" :styles="styles" />
      </template>
      <template v-slot:component-details>
        <DetailsComp @set-element-type="setElementType" />
      </template>
      <template v-slot:component-styles>
        <StylesComp @set-styles="setStyle" />
      </template>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./components/MainLayout";
import DetailsComp from "./components/details-comp";
import ComponentFactory from "./components/component-factory";
import StylesComp from "./components/styles-comp";

export default {
  name: "App",
  components: {
    MainLayout,
    ComponentFactory,
    DetailsComp,
    StylesComp,
  },
  data() {
    return {
      elementType: "",
      styles: {},
    };
  },
  methods: {
    setElementType(type) {
      this.elementType = type;
    },
    setStyle(styles) {
      console.log(styles);
      this.styles = styles;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
