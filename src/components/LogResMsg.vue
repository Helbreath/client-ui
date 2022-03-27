<!--<template>-->
<!--  <v-container id="logresmsg">-->
<!--    <v-dialog v-model="logresmsg" persistent max-width="400">-->
<!--      <v-card>-->
<!--        <v-card-title class="text-h6">Login Response</v-card-title>-->
<!--        <v-card-text>{{ responseText }}</v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-btn color="blue darken-1" text @click="Proceed">Okay</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
<!--  </v-container>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--// import { mapState } from 'vuex';-->
<!--import { Component, Prop, Vue } from 'vue-property-decorator';-->
<!--import { Game } from '../Game/game';-->

<!--@Component-->
<!--export default class LogResMsg extends Vue {-->
<!--  @Prop() private Game!: Game;-->
<!--  private responseText: string = 'Unknown message.';-->
<!--  private logresmsg: boolean = true;-->
<!--  constructor() {-->
<!--    super();-->
<!--  }-->
<!--  protected Proceed() {-->
<!--    this.$root.ChangeGameMode('mainmenu');-->
<!--    this.$root.PlaySound('E', 14, 5);-->
<!--  }-->

<!--  protected LogResMsg(msg: any) {-->
<!--    window.log(msg);-->
<!--    if (msg.status === 'failed') {-->
<!--      this.responseText = msg.message;-->
<!--      return;-->
<!--    }-->
<!--    const two = msg.charAt(1);-->
<!--  }-->

<!--  protected mounted() {-->
<!--    this.$root.ChangeMouse(0);-->
<!--  }-->
<!--  protected created() {-->
<!--    this.$root.$on('logresmsg', this.LogResMsg);-->
<!--  }-->
<!--  protected beforeDestroy() {-->
<!--    this.$root.$off('logresmsg', this.LogResMsg);-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--</style>-->
