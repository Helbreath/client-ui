<!--<template>-->
<!--  <v-container id="versionnotmatch">-->
<!--    <div id="hbx-popup-center-text" class="text-center text-truncate text-h5">-->
<!--      Client version does not match server<br />-->
<!--      <v-btn class="text-center mt-2" @click="Proceed()">Okay</v-btn>-->
<!--    </div>-->
<!--  </v-container>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--// import { mapState } from 'vuex';-->
<!--import { Component, Prop, Vue } from 'vue-property-decorator';-->
<!--import { Game } from '../Game/game';-->

<!--@Component-->
<!--export default class VersionNotMatch extends Vue {-->
<!--  @Prop() private Game!: Game;-->
<!--  constructor() {-->
<!--    super();-->
<!--  }-->
<!--  protected Proceed() {-->
<!--    this.$root.ChangeGameMode('mainmenu');-->
<!--    this.$root.PlaySound('E', 14, 5);-->
<!--  }-->
<!--  protected mounted() {}-->
<!--  protected beforeDestroy() {}-->
<!--}-->
<!--</script>-->
<!--<style lang="scss">-->
<!--#connecting {-->
<!--  margin-top: 35vh;-->
<!--  width: 50vw;-->
<!--  height: 25vh;-->
<!--  background-color: rgba(97, 41, 41, 0.5);-->
<!--  border-radius: 25px;-->
<!--}-->
<!--</style>-->
