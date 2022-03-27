<!--<template>-->
<!--  <div ref="draggableContainer" id="draggable-container" @mousedown="dragMouseDown" class="bordered-drag">-->
<!--    <div id="draggable-header">-->
<!--      <slot name="header"></slot>-->
<!--    </div>-->
<!--    <div id="draggable-body">-->
<!--      <slot name="main"></slot>-->
<!--    </div>-->
<!--    <div id="draggable-footer">-->
<!--      <slot name="footer"></slot>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Component, Prop, Vue } from 'vue-property-decorator';-->

<!--interface Movements {-->
<!--  clientX: number;-->
<!--  clientY: number;-->
<!--  movementX: number;-->
<!--  movementY: number;-->
<!--}-->

<!--@Component-->
<!--export default class Draggable extends Vue {-->
<!--  // @Prop({ default: 'rgb(0, 0, 0, 0)'}) private backgroundColor!: string;-->
<!--  public positions!: Movements;-->

<!--  constructor() {-->
<!--    super();-->
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

<!--  public dragMouseDown(event: any) {-->
<!--    event.preventDefault();-->
<!--    // get the mouse cursor position at startup:-->
<!--    this.positions.clientX = event.clientX;-->
<!--    this.positions.clientY = event.clientY;-->
<!--    document.onmousemove = this.elementDrag;-->
<!--    document.onmouseup = this.closeDragElement;-->
<!--  }-->

<!--  public elementDrag(event: any) {-->
<!--    event.preventDefault();-->
<!--    this.positions.movementX = this.positions.clientX - event.clientX;-->
<!--    this.positions.movementY = this.positions.clientY - event.clientY;-->
<!--    this.positions.clientX = event.clientX;-->
<!--    this.positions.clientY = event.clientY;-->

<!--    const inv = this.$refs.draggableContainer as HTMLElement;-->
<!--    // set the element's new position:-->
<!--    inv.style.top = inv.offsetTop - this.positions.movementY + 'px';-->
<!--    inv.style.left = inv.offsetLeft - this.positions.movementX + 'px';-->
<!--    window.SendMessage('movetestsprite', {-->
<!--      y: parseInt(inv.style.top, 10),-->
<!--      x: parseInt(inv.style.left, 10),-->
<!--    });-->
<!--  }-->

<!--  public closeDragElement() {-->
<!--    document.onmouseup = null;-->
<!--    document.onmousemove = null;-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss">-->
<!--#draggable-container {-->
<!--  position: absolute;-->
<!--  z-index: 9;-->
<!--}-->
<!--#draggable-header {-->
<!--  z-index: 10;-->
<!--}-->
<!--.bordered-drag {-->
<!--  border: 5px red solid;-->
<!--  width: 300px;-->
<!--}-->
<!--</style>-->
