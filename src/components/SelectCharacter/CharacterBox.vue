<template>
  <v-container id="characterBox">
    <div>
      Name: {{ character.name }}<br />
      Level: {{ character.level }}
    </div>
  </v-container>
</template>
<script lang="ts">
// import { mapState } from 'vuex';
import { Character } from '@/types/Character';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CharacterBox extends Vue {
  @Prop() private character!: Character;
  constructor() {
    super();
  }
  protected mounted() {}
  protected beforeDestroy() {}
}
</script>
<style lang="scss">
#characterBox {
  margin-top: 5px;
  background-color: rgba(97, 41, 41, 0.5);
}
</style>
