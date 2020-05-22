<template>
  <div class="main-layout">
    <div class="menu-bar-slot">
      <slot name="menu-bar"></slot>
    </div>
    <div class="file-system-slot">
      <slot name="file-system"></slot>
    </div>
    <div class="component-details-slot">
      <slot name="component-details"></slot>
    </div>
    <div class="component-styles-slot">
      <slot name="component-styles"></slot>
    </div>
    <div class="main-display-slot">
      <slot name="main-display"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-layout {
  display: grid;
  grid-template-areas:
    "menu-bar menu-bar menu-bar"
    "file-system main details"
    "file-system main styles";
  width: 100vw;
  height: 100vh;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 50px 1fr 1fr;
  div {
    border: 1px solid black;
    box-sizing: border-box;
  }
}

.file-system-slot {
  grid-area: file-system;
}
.menu-bar-slot {
  grid-area: menu-bar;
}
.component-details-slot {
  grid-area: details;
}
.component-styles-slot {
  grid-area: styles;
}
.file-system-slot {
  grid-area: file-system;
}
.main-display-slot {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
