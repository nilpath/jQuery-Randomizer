/*
 * Randomizer-Plugin
 * https://github.com/nilpath/jQuery-Randomizer
 *
 * Copyright (c) 2013 Christoffer Åhrling
 * Licensed under the MIT license.
 */

(function($) {

	$.fn.randomizer = function(options){
		var audio = $('<audio>');
		var source = $('<source>');
		var heading = $('<h1>');
		var btn = $('<a>');
		var interval = null;
		
		// Settings
		var settings = $.extend({
			'audio' : {
				'play' : true,
				'url' : 'media/drumroll.mp3',
				'type' : 'audio/mpeg'
			},
			'interval' : 10000,
			'values' : null
		}, options);
		
		// Methods
		var clear = function(){
			clearInterval(interval);	
		};

		var appendHtml = function(){
			var rand = Math.floor(Math.random()*settings.values.length);
			heading.html(settings.values[rand]);	
		};
		
		// Elements Setup
		source[0].src = settings.audio.url;
		source[0].type = settings.audio.type;
		audio.css('display', 'none').append(source).addClass('randomizer-sound');
		
		heading.attr('id', 'randomizer-selected');

		btn.attr('id', 'randomizer-btn').html('Random').on('click',function(e){
			e.preventDefault();
			if(settings.audio.play){
				audio[0].load();
				audio[0].play();
			}
			setTimeout(function(){clear();}, settings.interval);
			interval = setInterval(function(){appendHtml();}, 100);
		});

		this.append(heading);
		this.append(btn);
		if(settings.audio.play) {
			this.append(audio);
		}


	};

}(jQuery));
