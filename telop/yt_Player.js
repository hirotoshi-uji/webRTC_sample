//
//
// yt_Player.js
// 
// 

(function(){
  var CloseTrigger = function(el){
      var $video = $('.video-stream');
      $(el).on('click', function() {
        console.log('success')
          videoControl("playVideo");
      });
      function videoControl(action){
          var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
          $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
      }
  };
  var closeBtnClick = new CloseTrigger('#start');
 
})();