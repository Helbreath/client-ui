<template>
  <v-container id="dialog" :style="'background-image: url(https://helbreathio/ui/assets/' + dialogImage + '.png);'">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h6">{{ header }}</v-card-title>
        <v-card-text>{{ body }}</v-card-text>
        <v-card-actions>
          <v-btn color="success darken-1" text @click="callback">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WaitingInitData extends Vue {
  @Prop({ default: '' }) private header!: string;
  @Prop({ default: '' }) private body!: string;
  @Prop({ default: 'thin-dialog' }) private dialogImage!: string;
  @Prop() private callback!: () => void;
  private dialog: any;

  constructor() {
    super();
  }
  protected mounted() {}
  protected beforeDestroy() {}
}
</script>
<style lang="scss">
#dialog {
  margin-top: 35vh;
  width: 50vw;
  height: 25vh;
  background-color: rgba(97, 41, 41, 0.5);
  border-radius: 25px;
}
</style>
