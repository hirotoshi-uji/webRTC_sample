var tag = document.createElement('script') ;
tag.src = "http://www.youtube.com/iframe_api" ;
var firstScriptTag = document.getElementsByTagName('script')[0] ;
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag) ;

function onYouTubeIframeAPIReady(){
	ytPlayer = new YT.Player(
		'sample' ,
		{
			width : 100%
			videoId : 'hxSg2Ioz3LM'
			
			events: {
               'onReady': onPlayerReady, // プレーヤーの準備ができたときに実行
                'onStateChange': onPlayerStateChange // プレーヤーの状態が変更されたときに実行
           }
           
           events: {
               'onReady': onPlayerReady // プレーヤーの準備ができたときに実行
         }
		}
	);
}

var playerReady = false;
// プレーヤーの準備ができたとき
function onPlayerReady(event) {
  playerReady = true;
}

$(function() {
	$('#start').click(function() {
	    if(playerReady){
		ytPlayer.playVideo();
		}
	});
});

// プレーヤーの準備ができたとき
function onPlayerReady(event) {
   // 動画再生
 event.target.playVideo();
}

// プレーヤーの状態が変更されたとき
function onPlayerStateChange(event) {
   // 現在のプレーヤーの状態を取得
   var ytStatus = event.data;
  // 再生終了したとき
 if (ytStatus == YT.PlayerState.ENDED) {
     console.log('再生終了');
      // 動画再生
     event.target.playVideo();
   }
   // 再生中のとき
   if (ytStatus == YT.PlayerState.PLAYING) {
       console.log('再生中');
   }
   // 停止中のとき
   if (ytStatus == YT.PlayerState.PAUSED) {
        console.log('停止中');
   }
   // バッファリング中のとき
  if (ytStatus == YT.PlayerState.BUFFERING) {
     console.log('バッファリング中');
  }
   // 頭出し済みのとき
 if (ytStatus == YT.PlayerState.CUED) {
      console.log('頭出し済み');
 }
}


