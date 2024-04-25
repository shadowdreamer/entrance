<template lang="pug">
.shout-btn(@click="play()" :class="{hide:hide}") 
  .text FUS Ro Dah
  .shadow FUS Ro Dah
</template>
<script setup>
import { Howl, Howler } from 'howler';
import sound1 from '@/assets/fusrodah.webm'
import sound2 from '@/assets/fusrodah.mp3'
import { onMounted,ref } from 'vue'
const sound = new Howl({
  src: [sound1, sound2],
  autoplay: false,
  volume: 1,
});
const hide = ref(true)
onMounted(()=>{
  fontLoaded();
})
function fontLoaded(){
  document.fonts.ready.then(()=>{
    hide.value = false;
  })
}
function play () {
  sound.play();
  let dom = document.querySelector('.shadow');
  dom.animate([
    { transform: "scale(1)",opacity:0 },
    { transform: "scale(2)" ,opacity:0.3},
    { transform: "scale(3)" ,opacity:0.6},
    { transform: "scale(3)" ,opacity:0.3},
    { transform: "scale(3)" ,opacity:0}
  ],
    {
      delay: 1000,
      duration: 1000,
      iterations: 1,
      easing:'cubic-bezier(0.125, 0.745, 0.245, 0.885)'
    },
  );
 }


</script>
<style scoped lang="scss">
.shout-btn {
  @apply fixed top-1/2 left-[calc(50%-10vw)] text-[3vw] font-dovahkiin cursor-pointer transition-all opacity-50 select-none;
  transform-origin: right;
  &.hide{
    opacity: 0;
  }

  &:hover {
    @apply opacity-100;
  }

  .text {
    @apply text-center absolute whitespace-nowrap;
  }

  .shadow {
    @apply text-center absolute whitespace-nowrap opacity-0;
  }

}

 
</style>