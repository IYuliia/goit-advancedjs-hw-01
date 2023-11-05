import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

player.on('loaded', function () {
  const savedTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  if (!isNaN(savedTime)) {
    player.setCurrentTime(savedTime);
  }
});
