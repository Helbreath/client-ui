import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

export interface State {
  loggedIn: boolean;
  mainLoading: boolean;
  userSettingsOpen: boolean;
  serverSettingsOpen: boolean;
  channelSettingsOpen: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

export default store;
