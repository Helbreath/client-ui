<template>
  <div id="hbx-app">
    <div id="test" class="text-4xl" style="width: 300px; height: 300px; margin: 150px auto auto;">
      Helbreath Xtreme
    </div>

    <button class="btn-primary btn btn-default" @click="shit">click me</button>
    <div v-if="showVersion" id="version">
      Game: v{{ gameVersion }}<br />
      UI: v{{ uiVersion }}
    </div>
  </div>


<!--  <v-app id="hbxapp">-->
<!--    <v-app-bar app color="primary" dark>-->
<!--      <div class="d-flex align-center">Helbreath Xtreme</div>-->
<!--    </v-app-bar>-->

<!--    <v-main :key="update">-->
<!--      <MainMenu v-if="this.Game.mode === 'mainmenu'" :Game="this.Game" />-->
<!--      <Connecting v-else-if="this.Game.mode === 'connecting'" :Game="this.Game" />-->
<!--      <WaitingResponse v-else-if="this.Game.mode === 'waitingresponse'" :Game="this.Game" />-->
<!--      <Loading v-else-if="this.Game.mode === 'loading'" :Game="this.Game" />-->
<!--      <SelectCharacter v-else-if="this.Game.mode === 'selectcharacter'" :Game="this.Game" />-->
<!--      <ConnectionLost v-else-if="this.Game.mode === 'connectionlost'" :Game="this.Game" />-->
<!--      <CreateCharacter v-else-if="this.Game.mode === 'createnewcharacter'" :Game="this.Game" />-->
<!--      <WaitingInitData v-else-if="this.Game.mode === 'waitinginitdata'" :Game="this.Game" />-->
<!--      <MainGame v-else-if="this.Game.mode === 'maingame'" :Game="this.Game" />-->
<!--      <QueryForceLogin v-else-if="this.Game.mode === 'queryforcelogin'" :Game="this.Game" />-->
<!--      <LogResMsg v-else-if="this.Game.mode === 'logresmsg'" :Game="this.Game" />-->
<!--      <VersionNotMatch v-else-if="this.Game.mode === 'versionnotmatch'" :Game="this.Game" />-->

<!--      &lt;!&ndash; <div id="test" style="width: 300px; height: 300px; margin: auto; margin-top: 150px">TESTING STUFF</div> &ndash;&gt;-->
<!--      &lt;!&ndash;<Dialog />&ndash;&gt;-->

<!--      &lt;!&ndash; <Draggable>-->
<!--        <template slot="header"> Header </template>-->
<!--        <template slot="main"> Main </template>-->
<!--        <template slot="footer"> Footer </template>-->
<!--      </Draggable> &ndash;&gt;-->
<!--    </v-main>-->
<!--    &lt;!&ndash; <MainBar /> &ndash;&gt;-->
<!--    <div id="hbxtitle">-->
<!--      <v-btn block id="debugbutton" @click="ToggleDebug">Debug</v-btn>-->
<!--      <div v-if="debugon" id="hbxdebug">-->
<!--        <v-btn block @click="$root.PlaySound('E', 14, 5)">Test1</v-btn>-->
<!--        <v-btn block @click="Reload">Reload</v-btn>-->
<!--        <v-btn block @click="Logout">Logout</v-btn>-->
<!--        <v-btn block @click="ToggleDebug">Test4</v-btn>-->
<!--        &lt;!&ndash; <img :src="charSprite" :key="charKey" style="height: 256px; width: 256px" /> &ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-if="ShowVersion()" id="version">-->
<!--      Game: V {{ gameVersion }}<br />-->
<!--      UI: V {{ uiVersion }}-->
<!--    </div>-->
<!--  </v-app>-->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

import { Character } from './types/Character';
import Loading from './components/Loading.vue';
// import MainMenu from './components/MainMenu.vue';
// import WaitingResponse from './components/WaitingResponse.vue';
// import Connecting from './components/Connecting.vue';
// import SelectCharacter from './components/SelectCharacter.vue';
// import CreateCharacter from './components/CreateCharacter.vue';
// import ConnectionLost from './components/ConnectionLost.vue';
// import WaitingInitData from './components/WaitingInitData.vue';
// import MainGame from './components/MainGame.vue';
// import QueryForceLogin from './components/QueryForceLogin.vue';
// import LogResMsg from './components/LogResMsg.vue';
// import VersionNotMatch from './components/VersionNotMatch.vue';

const store = useStore(key);
const router = useRouter();

defineProps({
  source: {
    type: String,
  },
});

const update = ref(0);
const debugOn = ref(false);
const charSprite = ref('');
const charKey = ref(0);

// getters
const gameMode = computed(() => store.getters['game/mode']);
const gameVersion = computed(() => store.getters['game/gameVersion']);
const uiVersion = computed(() => store.getters['game/uiVersion']);

// actions
const sendMessage = (msg: string, data: any) => store.dispatch('game/sendMessage', { msg, data }, { root: true });
const playSound = (type: string, id: number, distance: number) => store.dispatch('game/playSound', { type, id, distance }, { root: true });
const playMusic = (type: string, id: number, distance: number) => store.dispatch('game/playMusic', { type, id, distance }, { root: true });
const changeMouse = (type: string, id: number, distance: number) => store.dispatch('game/changeMouse', { type, id, distance }, { root: true });
const changeGameMode = (type: string, id: number, distance: number) => store.dispatch('game/changeGameMode', { type, id, distance }, { root: true });

function showVersion() {
  switch (gameMode.value) {
    default:
      return true;
  }
}

function shit() {
  playSound('E', 14, 5);
}

function toggleDebug() {
  debugOn.value = !debugOn;
}

function Exit() {
  //window.vueapp?.$emit('exit');
}

function login() {
  if (gameMode.value !== 'mainmenu') return;
  const account = 'a';
  const password = 'b';
  sendMessage('login', { account, password });
  //this.$root.$emit('login', { account, password });
}

function setResolution(x: number, y: number) {
  sendMessage('resolution', { x, y });
}

function Logout() {
  sendMessage('disconnect', {});
}

onMounted(() => {
  sendMessage('onload', {});
});
// window.uiVersion = '0.0.1';
// window.gameVersion = '0.0.0';
</script>
<style lang="scss">
#hbx-app {
  width: 100%;
  height: 100%;

  color: white;

  //position: absolute;
  //top: 0px;
  //left: 0px;

  max-height: 100vh;
  max-width: 100vw;
  //margin-left: 25vw;
  background: rgba(0, 0, 0, 0);
  //padding-bottom: 8px;
  -webkit-user-select: none;
  user-select: none;
}
#test {
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  -webkit-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
  background-size: 1800% 1800%;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
}
#hbxtitle {
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: center;
  width: 15vw;
  //height: 40px;
  //background-color: #111111aa;
}
#debugbutton {
  text-align: center;
}
#version {
  font-size: 8pt;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
