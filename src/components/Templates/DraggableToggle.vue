<template>
  <div ref="draggableToggleContainer" id="draggable-toggle-container" @mousedown="dragMouseDown" class="bordered-drag">
    <div id="draggable-toggle-header">
      <slot name="header"></slot>
    </div>
    <div id="draggable-toggle-body">
      <slot name="main"></slot>
    </div>
    <div id="draggable-toggle-footer">
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

@Component
export default class DraggableToggle extends Vue {
  // @Prop({ default: 'rgb(0, 0, 0, 0)'}) private backgroundColor!: string;
  public positions!: Movements;
  public canMove: boolean = false;
  public name: string = '';

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

  public ToggleMove() {
    this.canMove = !this.canMove;
  }

  public dragMouseDown(event: any) {
    event.preventDefault();
    if (!this.canMove) {
      return;
    }
    // get the mouse cursor position at startup:
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;
    document.onmousemove = this.elementDrag;
    document.onmouseup = this.closeDragElement;
  }

  public elementDrag(event: any) {
    event.preventDefault();
    if (!this.canMove) {
      return;
    }
    this.positions.movementX = this.positions.clientX - event.clientX;
    this.positions.movementY = this.positions.clientY - event.clientY;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;

    const inv = this.$refs[this.name + 'Container'] as HTMLElement;
    // set the element's new position:
    if (inv.offsetTop - this.positions.movementY < 0) {
      inv.style.top = '0px';
    } else if (inv.offsetTop - this.positions.movementY >= window.innerHeight - 53) {
      inv.style.top = `${window.innerHeight - 53}px`;
    } else {
      inv.style.top = inv.offsetTop - this.positions.movementY + 'px';
    }

    if (inv.offsetLeft - this.positions.movementX < 0) {
      inv.style.left = '0px';
    } else if (inv.offsetLeft - this.positions.movementX >= window.innerWidth - 660) {
      inv.style.left = `${window.innerWidth - 660}px`;
    } else {
      inv.style.left = inv.offsetLeft - this.positions.movementX + 'px';
    }

    window.SendMessage('movetestsprite', {
      y: parseInt(inv.style.top, 10),
      x: parseInt(inv.style.left, 10),
    });
  }

  public closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
</script>

<style lang="scss">
</style>
