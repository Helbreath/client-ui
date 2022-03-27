<template>
  <v-container id="main-menu" class="text-center" style="width: 500px">
    <div class="text-truncate mt-3">Helbreath Xtreme Main Menu</div>
    <div class="mt-3">
      <v-btn class="mt-3" @click="connect">Connect to server</v-btn>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

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
const playMusic = (type: string, id: number, distance: number) => store.dispatch('game/playMusic', { type, id, distance }, { root: true });
const changeMouse = (type: string, id: number, distance: number) => store.dispatch('game/changeMouse', { type, id, distance }, { root: true });
const changeGameMode = (type: string, id: number, distance: number) => store.dispatch('game/changeGameMode', { type, id, distance }, { root: true });
const setDebug = () => store.dispatch('game/setDebug', null, { root: true });

function showVersion() {
  switch (gameMode.value) {
    default:
      return true;
  }
}

function connect() {
  playSound('E', 14, 5);
  sendMessage('main-menu-connect', {});
}

function login() {
  const account = 'a';
  const password = 'b';
  sendMessage('login', { account, password });
}

function setResolution(x: number, y: number) {
  sendMessage('resolution', { x, y });
}

function logout() {
  sendMessage('disconnect', {});
}
</script>
<style lang="scss">
#main-menu {
  margin-top: 35vh;
  width: 50vw;
  height: 25vh;
  background-color: rgba(97, 41, 41, 0.5);
  border-radius: 25px;
}
</style>
