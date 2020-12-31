<template>
  <div ref="inventoryContainer" id="inventory-container" @mousedown="dragMouseDown" class="inventory-drag">
    <div id="inventory-header">
      <slot name="header"></slot>
    </div>
    <slot name="main"></slot>
    <div id="inventory-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Movements {
  clientX: number;
  clientY: number;
  movementX: number;
  movementY: number;
}

export default class Inventory extends Vue {
  private positions!: Movements;

  constructor() {
    super();
  }

  public data() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  }

  private dragMouseDown(event: any) {
    event.preventDefault();
    // get the mouse cursor position at startup:
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;
    document.onmousemove = this.elementDrag;
    document.onmouseup = this.closeDragElement;
  }

  private elementDrag(event: any) {
    event.preventDefault();
    this.positions.movementX = this.positions.clientX - event.clientX;
    this.positions.movementY = this.positions.clientY - event.clientY;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;

    const inv = this.$refs.draggableContainer as HTMLElement;
    // set the element's new position:
    inv.style.top = inv.offsetTop - this.positions.movementY + 'px';
    inv.style.left = inv.offsetLeft - this.positions.movementX + 'px';
    window.SendMessage('movetestsprite', {
      y: parseInt(inv.style.top, 10),
      x: parseInt(inv.style.left, 10),
    });
  }

  private closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
</script>

<style>
#inventory-container {
  position: absolute;
  z-index: 9;
}
#inventory-header {
  z-index: 10;
}
.inventory-drag {
  border: 5px red solid;
  width: 300px;
}
</style>
