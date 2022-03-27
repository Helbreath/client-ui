<template>
  <div id="loading">
    <div style="border: 1px solid #ccc;">
      <div :style='[ "height: 24px", `width: ${progress}%`]'></div>
    </div>
<!--    <v-progress-linear color="red lighten-2" :value="progress" stream></v-progress-linear>-->
    <div class="text-center text-truncate mt-3">{{ label }}</div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

const store = useStore(key);
const router = useRouter();

// getters
const progress = computed(() => store.getters['game/loadingProgress']);
const label = computed(() => store.getters['game/loadingLabel']);

</script>
<style lang="scss">
#loading {
  margin-top: 45vh;
  width: 50vw;
  height: 25vh;
}
</style>
