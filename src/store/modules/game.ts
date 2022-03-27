import store from '@/store';
import { Character } from '@/types/Character';

store.registerModule('game', {
  namespaced: true,

  state: () => ({
    mode: '',
    gameVersion: '',
    uiVersion: import.meta.env.VITE_APP_UI_VERSION as string,
    update: 0,
    loadingProgress: 0,
    loadingLabel: '',
    charSprite: '',
    charKey: '',
    characters: [] as Character[],
    currentCharacter: null as Character | null,
    debug: import.meta.env.VITE_APP_DEBUG as boolean,
  }),

  mutations: {
    setMode(state, mode: string) {
      state.mode = mode;
    },
    setGameVersion(state, version: string) {
      state.gameVersion = version;
    },
    setUiVersion(state, version: string) {
      state.uiVersion = version;
    },
    incUpdate(state) {
      state.update++;
    },
    setLoadingProgress(state, progress: number) {
      state.loadingProgress = progress;
    },
    setLoadingLabel(state, label: string) {
      state.loadingLabel = label;
    },
    setCharSprite(state, sprite: string) {
      state.charSprite = sprite;
    },
    setCharKey(state, key: string) {
      state.charKey = key;
    },
    setCharacters(state, characters: Character[]) {
      state.characters = characters;
    },
    setCurrentCharacter(state, character: Character | null) {
      state.currentCharacter = character;
    },
    toggleDebug(state) {
      state.debug = !state.debug;
    },
  },

  actions: {
    sendMessage({ dispatch, commit }, data: { msg: string, data: any }) {
      window.SendJsonMessage(JSON.stringify({ msg: data.msg, data: data.data }));
    },

    changeGameMode({ dispatch, commit }, mode: string) {
      return dispatch('sendMessage', { msg: 'change-game-mode', data: mode });
    },

    changeMouse({ dispatch, commit }, cursor: number) {
      return dispatch('sendMessage', { msg: 'change-cursor', data: cursor });
    },

    playSound({ dispatch, commit }, data: { type: string, id: number, distance: number }) {
      return dispatch('sendMessage', { msg: 'play-sound', data });
    },

    playMusic({ dispatch, commit }, data: { status: boolean, file?: string }) {
      return dispatch('sendMessage', { msg: 'music', data });
    },

    async onMessage({ dispatch, commit }, data: { msg: string, param: any }) {
      const msg = data.msg;
      const param = data.param;
      console.log(`OnMessage: ${msg} - ${JSON.stringify(param)}`);
      switch (msg) {
        case 'log-res-msg':
          return dispatch('log-res-msg', param);
        case 'game-version':
          return commit('setGameVersion', param.version);
        case 'start-load': // start load process
          console.log('Starting load');
          return dispatch('sendMessage', { msg: 'start-load', data: {} });
        case 'post-load': // load is complete
          break;
        case 'game-mode':
          console.log(`Game mode recv: ${param.mode}`);
          commit('incUpdate');
          return commit('setMode', param.mode);
        case 'loading-progress':
          if (param.val === 100) {
            await dispatch('sendMessage', { msg: 'loading-complete', data: {} });
          }
          commit('setLoadingProgress', param.val);
          commit('setLoadingLabel', param.label);
          return;
        case 'char-sprite':
          commit('setCharSprite', `data:image/png;base64,${param.data}`);
          commit('setCharKey', param.key);
          return;
        case 'character-list':
          commit('setCharacters', param);
          // this.$root.$emit('characterlist');
          console.log(JSON.stringify(param));
          break;
      }
    },
  },

  getters: {
    mode(state) {
      return state.mode;
    },
    gameVersion(state) {
      return state.gameVersion;
    },
    uiVersion(state) {
      return state.uiVersion;
    },
    update(state) {
      return state.update;
    },
    loadingProgress(state) {
      return state.loadingProgress;
    },
    loadingLabel(state) {
      return state.loadingLabel;
    },
    charSprite(state) {
      return state.charSprite;
    },
    charKey(state) {
      return state.charKey;
    },
    characters(state) {
      return state.characters;
    },
    currentCharacter(state) {
      return state.currentCharacter;
    },
    debug(state) {
      return state.debug;
    },
  },
});
