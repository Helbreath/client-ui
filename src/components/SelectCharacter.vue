<template>
  <v-container id="selectcharacter">
    <div class="mt-2 text-center text-truncate text-h5">Select your character</div>

    <v-container :key="charupdate">
      <v-row>
        <v-col cols="4">
          <template v-for="(character, index) of $root.characters">
            <div v-if="index < 5" :key="index" width="100%">
              <div style="margin: 3px" @click="SelectCharacter(index)">
                <CharacterBox :class="selectedCharacter === index ? 'selected' : 'default'" :character="character" />
              </div>
            </div>
          </template>
        </v-col>
        <v-col cols="4">
          <template v-for="(character, index) of $root.characters">
            <div v-if="index > 4" @click="SelectCharacter(index)" :key="index">
              <CharacterBox :class="selectedCharacter === index ? 'selected' : 'default'" :character="character" />
            </div>
          </template>
        </v-col>
        <v-col cols="4"> </v-col>
      </v-row>
    </v-container>

    <div style="position: fixed; right: 5vw; bottom: 5vh; text-align: center">
      <div><v-btn block @click="EnterGame">Enter Game</v-btn></div>
      <div><v-btn block @click="CreateNewCharacter">Create New Character</v-btn></div>
      <div>
        <v-btn block @click="SetDeleteCharacter" :disabled="selectedCharacter === -1">Delete Character</v-btn>
      </div>
      <div><v-btn block @click="Disconnect">Logout</v-btn></div>
    </div>

    <!--<v-container
      style="background-color: #222222; position: fixed; left: 200px; top: 100px; width: 400px; border: 1px solid red"
    >
      <v-row><v-col class="text-center" cols="12">Coin shop - $10 USD = 1 XCoin</v-col></v-row>
      <v-row>
        <v-col cols="6">Coins on account: 0</v-col>
        <v-col offset="4" cols="2">Update</v-col>
      </v-row>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 1</v-col><v-col cols="2">50</v-col></v-row>
      </v-btn>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 2</v-col><v-col cols="2">50</v-col></v-row>
      </v-btn>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 3</v-col><v-col cols="2">150</v-col></v-row>
      </v-btn>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 4</v-col><v-col cols="2">50</v-col></v-row>
      </v-btn>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 5</v-col><v-col cols="2">250</v-col></v-row>
      </v-btn>
      <v-btn block small>
        <v-row class="text-center"><v-col cols="10">Overpriced item 7</v-col><v-col cols="2">550</v-col></v-row>
      </v-btn>
    </v-container>-->

    <v-dialog v-model="deletingCharacter" persistent max-width="400">
      <v-card v-if="selectedCharacter != -1">
        <v-card-title class="text-h6">Delete character</v-card-title>
        <v-card-text
          >Are you sure you would like to delete
          <span class="font-weight-black red--text">{{ $root.characters[selectedCharacter].name }}</span
          >?<br />This is irreversable.</v-card-text
        >
        <v-card-actions>
          <v-btn color="red darken-1" text @click="DeleteCharacter">Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="CancelDeleteCharacter">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script lang="ts">
// import { mapState } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Game } from '../Game/game';
import CharacterBox from './SelectCharacter/CharacterBox.vue';
import CharacterRender from './SelectCharacter/CharacterRender.vue';

@Component({
  components: {
    CharacterBox,
    CharacterRender,
  },
})
export default class SelectCharacter extends Vue {
  @Prop() private Game!: Game;
  private selectedCharacter: number = -1;
  private characterToDelete: string = '';
  private deletingCharacter: boolean = false;
  private charupdate: boolean = true;

  constructor() {
    super();
  }
  protected SelectCharacter(val: number) {
    this.selectedCharacter = val;
    window.SendMessage('selectcharacter', { charid: this.$root.characters[this.selectedCharacter].id });
  }
  protected Disconnect() {
    window.SendMessage('disconnect', {});
    this.$root.PlaySound('E', 14, 5);
  }
  protected CreateNewCharacter() {
    this.$root.PlaySound('E', 14, 5);
    this.$root.ChangeGameMode('createnewcharacter');
  }
  protected SetDeleteCharacter() {
    if (this.selectedCharacter === -1) {
      return;
    }
    this.$root.PlaySound('E', 14, 5);
    this.deletingCharacter = true;
  }
  protected DeleteCharacter() {
    this.$root.PlaySound('E', 14, 5);
    window.SendMessage('deletecharacter', { name: this.$root.characters[this.selectedCharacter].name });
    this.deletingCharacter = false;
    this.selectedCharacter = 0;
  }
  protected CancelDeleteCharacter() {
    this.$root.PlaySound('E', 14, 5);
    this.deletingCharacter = false;
  }
  protected EnterGame() {
    this.$root.PlaySound('E', 14, 5);
    window.SendMessage('entergame', {});
  }
  protected UpdateCharacters() {
    this.charupdate = !this.charupdate;
  }
  protected mounted() {
    this.$root.ChangeMouse(0);
    window.SendMessage('getcharacters', {});
    // this.$root.$on('logresmsg', this.LogResMsg);
    this.$root.$on('characterlist', this.UpdateCharacters);
  }
  protected beforeDestroy() {
    // this.$root.$off('logresmsg', this.LogResMsg);
    this.$root.$off('characterlist', this.UpdateCharacters);
  }
}
</script>
<style lang="scss">
#selectcharacter {
  margin-top: 3vh;
}
.default {
  border: 2px solid #000000;
}
.selected {
  border: 2px solid red;
}
</style>
