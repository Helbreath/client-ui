<template>
<!--  <div id="hbx-app">-->

<!--    <div :key="update">-->
<!--      <MainMenu v-if="gameMode === 'mainmenu'" />-->
<!--      <Connecting v-else-if="gameMode === 'connecting'" />-->
<!--      <WaitingResponse v-else-if="gameMode === 'waitingresponse'" />-->
<!--      <Loading v-else-if="gameMode === 'loading'" />-->
<!--      <SelectCharacter v-else-if="gameMode === 'selectcharacter'" />-->
<!--      <ConnectionLost v-else-if="gameMode === 'connectionlost'" />-->
<!--      <CreateCharacter v-else-if="gameMode === 'createnewcharacter'" />-->
<!--      <WaitingInitData v-else-if="gameMode === 'waitinginitdata'" />-->
<!--      <MainGame v-else-if="gameMode === 'maingame'" />-->
<!--      <QueryForceLogin v-else-if="gameMode === 'queryforcelogin'" />-->
<!--      <LogResMsg v-else-if="gameMode === 'logresmsg'" />-->
<!--      <VersionNotMatch v-else-if="gameMode === 'versionnotmatch'" />-->
<!--    </div>-->

<!--    <div id="test" class="text-4xl" style="width: 300px; height: 300px; margin: 150px auto auto;">-->
<!--      Helbreath Xtreme-->
<!--    </div>-->

<!--    <button class="btn-primary btn btn-default" @click="shit">click me</button>-->
<!--    <div v-if="showVersion" id="version">-->
<!--      Game: v{{ gameVersion }}<br />-->
<!--      UI: v{{ uiVersion }}-->
<!--    </div>-->
<!--  </div>-->

  <v-app id="hbxapp">
<!--    <v-app-bar app color="primary" dark>-->
<!--      <div class="d-flex align-center">Helbreath Xtreme</div>-->
<!--    </v-app-bar>-->

    <v-main :key="update">
<!--      <router-view/>-->
      <MainMenu v-if="gameMode === 'main-menu'" />
      <Connecting v-else-if="gameMode === 'connecting'" />
      <WaitingResponse v-else-if="gameMode === 'waiting-response'" />
      <Loading v-else-if="gameMode === 'loading'" />
      <SelectCharacter v-else-if="gameMode === 'select-character'" />
      <ConnectionLost v-else-if="gameMode === 'connection-lost'" />
      <CreateCharacter v-else-if="gameMode === 'create-new-character'" />
      <WaitingInitData v-else-if="gameMode === 'waiting-init-data'" />
      <MainGame v-else-if="gameMode === 'main-game'" />
      <QueryForceLogin v-else-if="gameMode === 'query-force-login'" />
      <LogResMsg v-else-if="gameMode === 'log-res-msg'" />
      <VersionNotMatch v-else-if="gameMode === 'version-not-match'" />

      <!-- <div id="test" style="width: 300px; height: 300px; margin: auto; margin-top: 150px">TESTING STUFF</div> -->
      <!--<Dialog />-->

      <!-- <Draggable>
        <template slot="header"> Header </template>
        <template slot="main"> Main </template>
        <template slot="footer"> Footer </template>
      </Draggable> -->
    </v-main>
    <!-- <MainBar /> -->
    <div id="hbxtitle">
      <v-btn block id="debugbutton" @click="toggleDebug">Toggle Debug</v-btn>
      <div v-if="debug" id="hbxdebug">
        <v-btn block @click="playSound('E', 14, 5)">Play sound</v-btn>
        <v-btn block @click="reload">Reload</v-btn>
        <v-btn block @click="logout">Logout</v-btn>
        <v-btn block @click="toggleDebug">Toggle Debug</v-btn>
        <!-- <img :src="charSprite" :key="charKey" style="height: 256px; width: 256px" /> -->
      </div>
    </div>
    <div v-if="showVersion" id="version">
      Game: v{{ gameVersion }}<br />
      UI: v{{ uiVersion }}
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

import { Character } from './types/Character';
import Loading from './components/Loading.vue';
import MainMenu from './components/MainMenu.vue';
// import WaitingResponse from './components/WaitingResponse.vue';
// import Connecting from './components/Connecting.vue';
// import SelectCharacter from './components/SelectCharacter.vue';
// import CreateCharacter from './components/CreateCharacter.vue';
import ConnectionLost from './components/ConnectionLost.vue';
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

// getters
const gameMode = computed(() => store.getters['game/mode']);
const gameVersion = computed(() => store.getters['game/gameVersion']);
const uiVersion = computed(() => store.getters['game/uiVersion']);
const update = computed(() => store.getters['game/update']);
const debug = computed(() => store.getters['game/debug']);
const charSprite = computed(() => store.getters['game/charSprite']);
const charKey = computed(() => store.getters['game/charKey'])

// actions
const sendMessage = (msg: string, data: any) => store.dispatch('game/sendMessage', { msg, data }, { root: true });
const playSound = (type: string, id: number, distance: number) => store.dispatch('game/playSound', { type, id, distance }, { root: true });
const playMusic = (status: boolean, file?: string) => store.dispatch('game/playMusic', { status, file }, { root: true });
const changeMouse = (cursor: number) => store.dispatch('game/changeMouse', cursor, { root: true });
const changeGameMode = (mode: string) => store.dispatch('game/changeGameMode', mode, { root: true });
const toggleDebug = () => store.dispatch('game/setDebug', null, { root: true });

function showVersion() {
  switch (gameMode.value) {
    default:
      return true;
  }
}

function shit() {
  playSound('E', 14, 5);
}

function setResolution(x: number, y: number) {
  sendMessage('resolution', { x, y });
}

function logout() {
  sendMessage('disconnect', {});
}

function reload() {
  router.replace('/');
}

onMounted(() => {
  sendMessage('on-load', {});
});
</script>
<style lang="scss">
</style>
