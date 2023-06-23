$(document).ready(function () {
  var count = 0;

  $(".tarot-card").click(function () {
    var card = $(this);
    if (count < 11) {
      $(this).removeClass("top").addClass("bottom");

      count++;
    }
    if (count == 11) {
      $("div").removeClass("bottom");

      count = 0;
    }
    shuffle(card);
  });
});

function shuffle(card) {
  TweenLite.fromTo(
    card,
    0.6,
    {
      x: 410,
      y: -15,
      ease: Expo.easeOut
    },
    {
      x: 0,
      y: 0,
      ease: Expo.easeIn
    }
  );
}

var bgMusicURL = 'BGmusic 2.mp3';
var bgMusicControls = true; // Show UI music control

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}