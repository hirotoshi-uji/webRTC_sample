var tag = document.createElement('script') ;
tag.src = "http://www.youtube.com/iframe_api" ;
var firstScriptTag = document.getElementsByTagName('script')[0] ;
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag) ;

function onYouTubeIframeAPIReady(){
	ytPlayer = new YT.Player(
		'sample' ,
		{
			width : 100%
			videoId : 'WuakCHtbVU'
		}
	);
}

$(function() {
	$('#start').click(function() {
		ytPlayer.playVideo();
	});
});