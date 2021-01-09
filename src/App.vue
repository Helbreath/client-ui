<template>
  <v-app id="hbxapp">
    <!--<v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Helbreath Xtreme</div>
    </v-app-bar>-->

    <v-main :key="update">
      <MainMenu v-if="this.Game.mode === 'mainmenu'" :Game="this.Game" />
      <Connecting v-else-if="this.Game.mode === 'connecting'" :Game="this.Game" />
      <WaitingResponse v-else-if="this.Game.mode === 'waitingresponse'" :Game="this.Game" />
      <Loading v-else-if="this.Game.mode === 'loading'" :Game="this.Game" />
      <SelectCharacter v-else-if="this.Game.mode === 'selectcharacter'" :Game="this.Game" />
      <ConnectionLost v-else-if="this.Game.mode === 'connectionlost'" :Game="this.Game" />
      <CreateCharacter v-else-if="this.Game.mode === 'createnewcharacter'" :Game="this.Game" />
      <WaitingInitData v-else-if="this.Game.mode === 'waitinginitdata'" :Game="this.Game" />
      <QueryForceLogin v-else-if="this.Game.mode === 'queryforcelogin'" :Game="this.Game" />
      <LogResMsg v-else-if="this.Game.mode === 'logresmsg'" :Game="this.Game" />
      <VersionNotMatch v-else-if="this.Game.mode === 'versionnotmatch'" :Game="this.Game" />

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
      <v-btn block id="debugbutton" @click="ToggleDebug">Debug</v-btn>
      <div v-if="debugon" id="hbxdebug">
        <v-btn block @click="$root.PlaySound('E', 14, 5)">Test1</v-btn>
        <v-btn block @click="Reload">Reload</v-btn>
        <v-btn block @click="ToggleDebug">Test3</v-btn>
        <v-btn block @click="ToggleDebug">Test4</v-btn>
        <!-- <img :src="charSprite" :key="charKey" style="height: 256px; width: 256px" /> -->
      </div>
    </div>
    <div v-if="ShowVersion()" id="version">
      Game: V {{ gameVersion }}<br />
      UI: V {{ uiVersion }}
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Game } from './Game/game';
import { Character } from './types/Character';
import MainMenu from './components/MainMenu.vue';
import WaitingResponse from './components/WaitingResponse.vue';
import Connecting from './components/Connecting.vue';
import Loading from './components/Loading.vue';
import SelectCharacter from './components/SelectCharacter.vue';
import CreateCharacter from './components/CreateCharacter.vue';
import ConnectionLost from './components/ConnectionLost.vue';
import WaitingInitData from './components/WaitingInitData.vue';
import QueryForceLogin from './components/QueryForceLogin.vue';
import LogResMsg from './components/LogResMsg.vue';
import VersionNotMatch from './components/VersionNotMatch.vue';

@Component({
  components: {
    MainMenu,
    WaitingResponse,
    Connecting,
    Loading,
    SelectCharacter,
    CreateCharacter,
    ConnectionLost,
    WaitingInitData,
    QueryForceLogin,
    LogResMsg,
    VersionNotMatch,
  },
})
export default class App extends Vue {
  @Prop() private source!: string;

  private Game: Game;
  private update: number = 0;
  private debugon: boolean = false;
  private gameVersion: string = window.gameVersion;
  private uiVersion: string = window.uiVersion;

  private charSprite: string = '';
  private charKey: number = 0;

  constructor() {
    super();
    this.Game = new Game();
  }

  public ShowVersion() {
    switch (this.Game.mode) {
      default:
        return true;
    }
  }

  public Reload() {
    window.location.reload();
  }

  protected OnMessage(msg: string, param: any) {
    window.log(`OnMessage: ${msg} - ${JSON.stringify(param)}`);
    switch (msg) {
      case 'logresmsg':
        this.$root.$emit('logresmsg', param);
        break;
      case 'gameversion':
        this.gameVersion = param.version;
        window.gameVersion = param.version;
        break;
      case 'startload': // start load process
        window.log('Starting load');
        window.SendMessage('startload', {});
        break;
      case 'postload': // load is complete
        break;
      case 'gamemode':
        this.Game.mode = param.mode;
        window.log(`Game mode recv: ${this.Game.mode}`);
        this.update++;
        break;
      case 'loadingprogress':
        if (param.val === 100) {
          window.SendMessage('loadingcomplete', {});
        }
        this.$root.$emit('progress', param.val, param.label);
        break;
      case 'charsprite':
        this.charSprite = `data:image/png;base64,${param.data}`;
        this.charKey = param.key;
        break;
      case 'characterlist':
        this.$root.characters = param as Character[];
        this.$root.$emit('characterlist');
        window.log(JSON.stringify(this.$root.characters));
        break;
    }
  }

  // protected data() {}

  protected ToggleDebug() {
    this.debugon = !this.debugon;
  }

  protected Exit() {
    window.vueapp?.$emit('exit');
  }

  protected Login() {
    if (window.game.mode !== 'mainmenu') return;
    const account = 'a';
    const password = 'b';
    this.$root.$emit('login', { account, password });
  }

  protected SetResolution(x: number, y: number) {
    window.vueapp?.$emit('resolution', { x, y });
  }

  protected beforeCreate() {}
  protected created() {
    this.$vuetify.theme.dark = true;
    this.$root.$on('message', this.OnMessage);
    window.log('created');
  }
  protected beforeMount() {}
  protected mounted() {
    window.SendMessage('onload', {});
  }
  protected beforeUpdate() {}
  protected updated() {}
  protected beforeDestroy() {
    this.$root.$off('message', this.OnMessage);
  }
  protected destroyed() {}
}
</script>

<style lang="scss">
#hbxapp {
  width: calc(100vw);
  height: calc(100vh);

  //position: absolute;
  //top: 0px;
  //left: 0px;

  width: 100vw;
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
