<!--<template>-->
<!--  <div ref="MainBarContainer" id="main-bar-container" @mousedown="dragMouseDown">-->
<!--    <div id="draggable-toggle-header">-->
<!--      <slot name="header"></slot>-->
<!--    </div>-->
<!--    <div id="draggable-toggle-body">-->
<!--      <slot name="main">-->
<!--        <v-btn @click="ToggleMove()" id="lockbutton" :style="'background-color: ' + (canMove ? 'red' : 'green')">-->
<!--          <v-icon style="font-size: 8pt; width: 5px">mdi-lock</v-icon></v-btn-->
<!--        >-->
<!--      </slot>-->
<!--    </div>-->
<!--    <div id="draggable-toggle-footer">-->
<!--      <slot name="footer"></slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Component, Prop, Vue } from 'vue-property-decorator';-->
<!--import DraggableToggle from '../Templates/DraggableToggle.vue';-->

<!--interface Movements {-->
<!--  clientX: number;-->
<!--  clientY: number;-->
<!--  movementX: number;-->
<!--  movementY: number;-->
<!--}-->

<!--@Component-->
<!--export default class MainBar extends DraggableToggle {-->
<!--  constructor() {-->
<!--    super();-->
<!--    this.name = 'MainBar';-->
<!--  }-->

<!--  public data() {-->
<!--    return {-->
<!--      positions: {-->
<!--        clientX: undefined,-->
<!--        clientY: undefined,-->
<!--        movementX: 0,-->
<!--        movementY: 0,-->
<!--      },-->
<!--    };-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss">-->
<!--#main-bar-container {-->
<!--  position: absolute;-->
<!--  top: 550px;-->
<!--  left: 0px;-->
<!--  height: 53px;-->
<!--  width: 660px;-->
<!--  z-index: 100;-->
<!--  background-image: url(https://helbreath.io/ui/assets/14.png);-->
<!--}-->
<!--#draggable-container {-->
<!--  position: absolute;-->
<!--}-->
<!--#draggable-header {-->
<!--  z-index: 10;-->
<!--}-->
<!--/*.bordered-drag {-->
<!--  border: 5px red solid;-->
<!--  width: 300px;-->
<!--}*/-->
<!--#lockbutton {-->
<!--  position: absolute;-->
<!--  width: 15px;-->
<!--  height: 15px;-->
<!--  top: 0px;-->
<!--  right: 0px;-->
<!--  min-width: 10px;-->
<!--  padding: 0;-->
<!--}-->
<!--</style>-->
