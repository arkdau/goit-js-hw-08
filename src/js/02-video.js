import Player from '@vimeo/player';
// Requiring lodash library
const _throttle = require("lodash.throttle");
import { default as localStorage } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('play', (data) => {
  //console.log('Player start: ', data);
  let videoplayerCurrentTime = 0;
  videoplayerCurrentTime = localStorage.load("videoplayer-current-time");
  console.log(`videoplayer-current-time: ${videoplayerCurrentTime} sec`);
  player.setCurrentTime(videoplayerCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
     seconds = this;
  }).catch(function(error) {
      switch (error.name){
        case 'RangeError':
            // the time was less than 0 or greater than video's duration
            break;
        default:
            // some other error occurred
            break;
      }
    });
});

player.on('timeupdate', _throttle((data) => {
  console.log('time update: ', data);
  localStorage.save("videoplayer-current-time", data.seconds);
},1000));

console.log('localStorage: ', localStorage);

