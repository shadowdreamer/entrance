import {Howl, Howler} from 'howler';
import sound1 from '@/assets/dragonborn.webm'
import sound2 from '@/assets/dragonborn.mp3'
const sound = new Howl({
  src: [sound1,sound2],
  autoplay: true,
  loop: true,
  volume: 0.5,
});

sound.play();
console.log(sound);
export {sound}