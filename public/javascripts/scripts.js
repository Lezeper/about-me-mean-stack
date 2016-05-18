var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};

function show_hide_skill(sid){
	$(".skills").hide();
	$("#"+sid).show();
	callback();
}
//
// $(function() {
// 	// Setup the player to autoplay the next track
// 	var a = audiojs.createAll({
// 		trackEnded: function() {
// 			var next = $('ol li.playing').next();
// 			if (!next.length) next = $('ol li').first();
// 			next.addClass('playing').siblings().removeClass('playing');
// 			audio.load($('a', next).attr('data-src'));
// 			audio.play();
// 		}
// 	});
//
// 	// Load in the first track
// 	var audio = a[0];
// 	first = $('ol a').attr('data-src');
// 	$('ol li').first().addClass('playing');
// 	audio.load(first);
//
// 	// Load in a track on click
// 	$('ol li').click(function(e) {
// 		e.preventDefault();
// 		$(this).addClass('playing').siblings().removeClass('playing');
// 		audio.load($('a', this).attr('data-src'));
// 		audio.play();
// 	});
// 	// Keyboard shortcuts
// 	$(document).keydown(function(e) {
// 		var unicode = e.charCode ? e.charCode : e.keyCode;
// 		// right arrow
// 		if (unicode == 39) {
// 			var next = $('li.playing').next();
// 			if (!next.length) next = $('ol li').first();
// 			next.click();
// 			// back arrow
// 		} else if (unicode == 37) {
// 			var prev = $('li.playing').prev();
// 			if (!prev.length) prev = $('ol li').last();
// 			prev.click();
// 			// spacebar
// 		} else if (unicode == 32) {
// 			audio.playPause();
// 		}
// 	})
// });