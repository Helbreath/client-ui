<template>
  <v-container id="waitingresponse">
    <div id="hbx-popup-center-text" class="text-center text-truncate text-h5">
      Waiting for server response...<br />
      <v-btn v-if="hasCancel" class="text-center mt-2" @click="CancelWaiting()">Cancel waiting</v-btn>
    </div>

    <v-dialog v-model="creationError" persistent max-width="450">
      <v-card>
        <v-card-title class="text-h6">Error</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success darken-1" text @click="CallbackSuccess">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script lang="ts">
// import { mapState } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Game } from '../Game/game';

@Component
export default class WaitingResponse extends Vue {
  @Prop() private Game!: Game;
  private timeStarted: number;
  private hasCancel: boolean = false;
  private cancelTimeout!: number;
  private creationError: boolean = false;
  private errorMessage: string = '';

  constructor() {
    super();
    this.timeStarted = Date.now();
  }
  protected CallbackSuccess() {
    this.$root.ChangeGameMode('mainmenu');
  }
  protected LogResMsg(msg: any) {
    window.log(msg);
    if (msg.status === 'failed') {
      this.errorMessage = 'Disconnected from server: ' + msg.reason;
      this.creationError = true;
      this.$root.ChangeMouse(0);
      return;
    }
    if (msg.status === 'success') {
      return;
    }

    const one = msg.charAt(0);
    const two = msg.charAt(1);
  }
  protected CancelWaiting() {
    window.SendMessage('cancelwaiting', {});
    this.$root.ChangeGameMode('mainmenu');
    this.$root.PlaySound('E', 14, 5);
  }
  protected AddCancel() {
    this.hasCancel = true;
    this.cancelTimeout = 0;
  }
  protected mounted() {
    this.cancelTimeout = setTimeout(this.AddCancel, 5000);
  }
  protected beforeDestroy() {
    this.$root.$off('logresmsg', this.LogResMsg);
    if (this.cancelTimeout) clearTimeout(this.cancelTimeout);
  }
  protected created() {
    this.$root.$on('logresmsg', this.LogResMsg);
  }
}
</script>
<style lang="scss">
#waitingresponse {
  //position: absolute;
  //top: 0px;
  //left: 0px;
  margin-top: 35vh;
  width: 50vw;
  height: 25vh;
  background-color: rgba(97, 41, 41, 0.5);
  border-radius: 25px;
}
#hbx-popup-center-text {
  margin-top: 8vh;
}
</style>>