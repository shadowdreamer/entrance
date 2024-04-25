<template lang="pug">
.mute-btn(v-if="state.showMute" @click="toggleSound" :class="[state.muted?'muted':'playing']") MUSIC
</template>
<script setup>
import { Howl, Howler } from 'howler';
import sound1 from '@/assets/dragonborn.webm'
import sound2 from '@/assets/dragonborn.mp3'
import { reactive } from "vue";
const sound = new Howl({
  src: [sound1, sound2],
  autoplay: true,
  loop: true,
  volume: 0.5,
});

const state = reactive({
  showMute: false,
  muted: false,
})

sound.on('play', () => {
  state.showMute = true;
  state.muted = false;
})
sound.on('pause', () => {
  state.muted = true;
})
sound.play();

function toggleSound () {
  if (sound.playing()) {
    sound.pause()
  } else {
    sound.play()
  }
}

</script>
<style scoped lang="scss">
.mute-btn {
  @apply font-dovahkiin fixed top-6 right-6 text-3xl cursor-pointer;

  &.muted {
    @apply line-through
  }

  &.playing {
    animation: beat 1.2s infinite;
    transform-origin: center;
  }
}

@keyframes beat {
  0% {
    transform: scale(1);
  }

  90% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>