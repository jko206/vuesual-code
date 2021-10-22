<template>
  <div id="app">
    <MainLayout>
      <template v-slot:menu-bar>Menu bar</template>
      <template v-slot:file-system>file system</template>
      <template v-slot:main-display>
        <ComponentFactory :templateHtml="template" :styles="styles" />
      </template>
      <template v-slot:component-details>
        <TemplateInput @set-element-type="setElementType" />
      </template>
      <template v-slot:component-styles>
        <StylesComp @set-styles="setStyle" />
      </template>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./components/main-layout";
import TemplateInput from "./components/template-input";
import ComponentFactory from "./components/component-factory";
import StylesComp from "./components/styles-comp";

export default {
  name: "App",
  components: {
    MainLayout,
    ComponentFactory,
    TemplateInput,
    StylesComp,
  },
  data() {
    return {
      template: "",
      styles: {},
    };
  },
  methods: {
    setElementType(template) {
      this.template = template;
    },
    setStyle(styles) {
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
