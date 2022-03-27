<!--<template>-->
<!--  <v-container id="createcharacter">-->
<!--    <div class="mt-2 text-center text-truncate text-h5">Create your character</div>-->
<!--    &lt;!&ndash;<div-->
<!--      style="-->
<!--        position: fixed;-->
<!--        top: 0px;-->
<!--        left: 0px;-->
<!--        z-index: -1000;-->
<!--        background-image: url(https://helbreath.io/ui/assets/createcharacter.png);-->
<!--        height: 100vh;-->
<!--        width: 100vw;-->
<!--      "-->
<!--    ></div>&ndash;&gt;-->
<!--    <div class="backgroundfiller"></div>-->
<!--    <v-form style="width: 80vw; margin-left: 10vw">-->
<!--      <v-row>-->
<!--        <v-col cols="8">-->
<!--          <v-text-field-->
<!--            v-model="characterName"-->
<!--            :rules="[NameValidate || '2 letter minimum']"-->
<!--            label="Character name"-->
<!--            hint="Req"-->
<!--            maxlength="1000"-->
<!--            required-->
<!--          ></v-text-field>-->
<!--        </v-col>-->
<!--        <v-col cols="4">-->
<!--          <v-switch-->
<!--            v-model="gender"-->
<!--            value="0"-->
<!--            true-value="1"-->
<!--            false-value="0"-->
<!--            class="custom-red"-->
<!--            color="pink"-->
<!--            :label="'Gender ' + (gender === '0' ? 'Male' : 'Female')"-->
<!--          >-->
<!--          </v-switch>-->
<!--        </v-col>-->
<!--      </v-row>-->

<!--      <v-slider-->
<!--        style="pt-3"-->
<!--        v-model="skinColor"-->
<!--        label="Skin Color"-->
<!--        :thumb-color="SkinColorColor()"-->
<!--        max="3"-->
<!--        min="1"-->
<!--        ticks-->
<!--        track-color="white"-->
<!--        color="white"-->
<!--      ></v-slider>-->
<!--      <v-slider-->
<!--        v-model="underwearColor"-->
<!--        label="Underwear Color"-->
<!--        :thumb-color="UnderwearColorColor()"-->
<!--        max="16"-->
<!--        min="1"-->
<!--        ticks-->
<!--        track-color="white"-->
<!--        color="white"-->
<!--        :track-fill-color="UnderwearColorColor()"-->
<!--      ></v-slider>-->
<!--      <v-slider-->
<!--        v-model="hairColor"-->
<!--        label="Hair Color"-->
<!--        :thumb-color="HairColorColor()"-->
<!--        max="16"-->
<!--        min="1"-->
<!--        ticks-->
<!--        track-color="white"-->
<!--        color="white"-->
<!--        :track-fill-color="HairColorColor()"-->
<!--      ></v-slider>-->
<!--      <v-slider-->
<!--        v-model="hairStyle"-->
<!--        label="Hair Style"-->
<!--        max="16"-->
<!--        min="1"-->
<!--        ticks-->
<!--        track-color="white"-->
<!--        color="white"-->
<!--      ></v-slider>-->

<!--      <v-container :key="counter">-->
<!--        <v-row v-for="(stat, index) in statNames" :key="index" class="text-caption">-->
<!--          <v-col cols="7">{{ stat }}</v-col>-->
<!--          <v-col cols="1">{{ stats[index] }}</v-col>-->
<!--          <v-col cols="2">-->
<!--            <v-btn x-small icon @click="AddToStat(index)"><v-icon>mdi-plus</v-icon></v-btn>-->
<!--            <v-btn x-small icon @click="RemoveFromStat(index)"><v-icon>mdi-minus</v-icon></v-btn>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--    </v-form>-->

<!--    <div style="width: 10vw; position: fixed; right: 5vw; bottom: 5vh; text-align: center">-->
<!--      <div><v-btn @click="CreateCharacter" width="100px">Create</v-btn></div>-->
<!--      <div><v-btn @click="CancelCreateCharacter" width="100px">Cancel</v-btn></div>-->
<!--    </div>-->

<!--    <v-dialog v-model="creationError" persistent max-width="338">-->
<!--      <v-container-->
<!--        style="background-image: url(https://helbreath.io/ui/assets/large-dialog.png); height: 202px; width: 338px"-->
<!--        class="black&#45;&#45;text"-->
<!--      >-->
<!--        <v-card-title class="text-h6 font-weight-bold">Error</v-card-title>-->
<!--        <v-card-text class="body-2 font-weight-black">{{ errorMessage }}</v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn color="cyan accent-4" text @click="creationError = false">Okay</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-container>-->
<!--    </v-dialog>-->

<!--    &lt;!&ndash;<v-dialog v-model="creationError" persistent max-width="450">-->
<!--      <v-card style="background-image: url(https://helbreath.io/ui/assets/wide-dialog.png)">-->
<!--        <v-card-title class="text-h6">Error</v-card-title>-->
<!--        <v-card-text>{{ errorMessage }}</v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn color="success darken-1" text @click="creationError = false">Okay</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>&ndash;&gt;-->

<!--    <v-dialog v-model="creationSuccess" persistent max-width="450">-->
<!--      <v-card>-->
<!--        <v-card-title class="text-h6">Created</v-card-title>-->
<!--        <v-card-text>Character created</v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn color="success darken-1" text @click="CallbackSuccess">Okay</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
<!--    &lt;!&ndash;<Dialog v-if="creationError" header="Error" :body="errorMessage" callback="() => { creationError = false; }" />-->
<!--    <Dialog v-if="creationSuccess" header="Created" body="Character created" callback="() => { CallbackSuccess(); }" />&ndash;&gt;-->
<!--  </v-container>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--// import { mapState } from 'vuex';-->
<!--import { Component, Prop, Vue } from 'vue-property-decorator';-->
<!--import { Game } from '../Game/game';-->
<!--import { WeaponNumToRgba, ArmorNumToRgba } from '../ColorUtils';-->
<!--import Dialog from './Dialog.vue';-->
<!--// import { mdiPlus, mdiMinus } from '@mdi/js';-->

<!--@Component({-->
<!--  components: {-->
<!--    Dialog,-->
<!--  },-->
<!--})-->
<!--export default class CreateCharacter extends Vue {-->
<!--  @Prop() private Game!: Game;-->
<!--  private characterName: string = '';-->
<!--  private skinColor: number = 0;-->
<!--  private underwearColor: number = 0;-->
<!--  private hairColor: number = 0;-->
<!--  private hairStyle: number = 0;-->
<!--  private gender: string = '0';-->
<!--  private creationError: boolean = false;-->
<!--  private creationSuccess: boolean = false;-->
<!--  private errorMessage: string = '';-->
<!--  private dialog: any;-->
<!--  private dialog2: any;-->

<!--  private stats: number[] = [10, 10, 10, 10, 10, 10];-->
<!--  private statNames: string[] = ['Strength', 'Vitality', 'Dexterity', 'Intelligence', 'Magic', 'Charisma'];-->
<!--  private counter: number = 0;-->

<!--  constructor() {-->
<!--    super();-->
<!--  }-->

<!--  protected CountStats() {-->
<!--    return this.stats.reduce((acc, curr) => acc + curr);-->
<!--  }-->

<!--  protected AddToStat(stat: number) {-->
<!--    if (this.CountStats() >= 70 || stat > 6 || stat < 0 || this.stats[stat] === 14) {-->
<!--      return;-->
<!--    }-->
<!--    this.stats[stat] = this.stats[stat] + 1;-->
<!--    this.counter++;-->
<!--  }-->

<!--  protected RemoveFromStat(stat: number) {-->
<!--    if (this.CountStats() <= 60 || stat > 6 || stat < 0 || this.stats[stat] === 10) {-->
<!--      return;-->
<!--    }-->
<!--    this.stats[stat] = this.stats[stat] - 1;-->
<!--    this.counter++;-->
<!--  }-->

<!--  protected SkinColorColor() {-->
<!--    switch (this.skinColor) {-->
<!--      case 1:-->
<!--        return 'black';-->
<!--      case 2:-->
<!--        return 'yellow';-->
<!--      case 3:-->
<!--        return 'white';-->
<!--    }-->
<!--    return 'white';-->
<!--  }-->
<!--  protected NameValidate() {-->
<!--    const newName = this.characterName.replaceAll(/[lI1]/g, '');-->
<!--    if (newName.length < 2) {-->
<!--      return false;-->
<!--    }-->
<!--    return true;-->
<!--  }-->
<!--  protected UnderwearColorColor() {-->
<!--    return ArmorNumToRgba(this.underwearColor);-->
<!--  }-->
<!--  protected HairColorColor() {-->
<!--    return ArmorNumToRgba(this.hairColor);-->
<!--  }-->
<!--  protected CreateCharacter() {-->
<!--    if (!this.NameValidate() || this.characterName.length < 2 || this.characterName.length > 10) {-->
<!--      return;-->
<!--    }-->
<!--    this.$root.PlaySound('E', 14, 5);-->
<!--    window.SendMessage('createcharacter', {-->
<!--      name: this.characterName,-->
<!--      gender: this.gender === '1' ? 1 : 0,-->
<!--      skin_color: this.skinColor,-->
<!--      hair_style: this.hairStyle,-->
<!--      hair_color: this.hairColor,-->
<!--      underwear_color: this.underwearColor,-->
<!--      stats: this.stats,-->
<!--    });-->
<!--    // this.$root.ChangeGameMode('selectcharacter');-->
<!--  }-->
<!--  protected CancelCreateCharacter() {-->
<!--    this.$root.PlaySound('E', 14, 5);-->
<!--    this.$root.ChangeGameMode('selectcharacter');-->
<!--  }-->
<!--  protected LogResMsg(msg: any) {-->
<!--    window.log(msg);-->
<!--    if (msg.status === 'failed') {-->
<!--      this.errorMessage = 'Unable to create character: ' + msg.reason;-->
<!--      this.creationError = true;-->
<!--      return;-->
<!--    }-->
<!--    if (msg.status === 'success') {-->
<!--      this.creationSuccess = true;-->
<!--      return;-->
<!--    }-->

<!--    const one = msg.charAt(0);-->
<!--    const two = msg.charAt(1);-->
<!--  }-->
<!--  protected CallbackSuccess() {-->
<!--    this.$root.ChangeGameMode('selectcharacter');-->
<!--  }-->
<!--  protected EnterGame() {}-->
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
<!--#connecting {-->
<!--  margin-top: 35vh;-->
<!--  width: 50vw;-->
<!--  height: 25vh;-->
<!--  background-color: rgba(97, 41, 41, 0.5);-->
<!--  border-radius: 25px;-->
<!--}-->
<!--.backgroundfiller {-->
<!--  position: fixed;-->
<!--  top: 0px;-->
<!--  left: 0px;-->
<!--  z-index: -1000;-->
<!--  background-color: rgb(70, 37, 37);-->
<!--  height: 100vh;-->
<!--  width: 100vw;-->
<!--}-->
<!--.custom-red .v-input&#45;&#45;selection-controls__input {-->
<!--  div.v-input&#45;&#45;selection-controls__ripple {-->
<!--    color: red;-->
<!--  }-->
<!--  div.v-input&#45;&#45;switch__track {-->
<!--    color: red;-->
<!--  }-->
<!--  div.v-input&#45;&#45;switch__thumb {-->
<!--    color: red;-->
<!--  }-->
<!--}-->
<!--</style>-->
