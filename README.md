# Randomizer Plugin

A jQuery plugin made for pick something from a list at random. A demo can be found at [CodePen][http://codepen.io/nilpath/pen/FzEkl].

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nilpath/jQuery-Randomizer/master/dist/randomizer-plugin.0.1.0.min.js
[max]: https://raw.github.com/nilpath/jQuery-Randomizer/master/dist/randomizer-plugin.0.1.0.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/randomizer-plugin.0.1.0.min.js"></script>
<script>
jQuery(function($) {
  $(div).randomizer({
    audio : {
    	play : false
    },
    values : ["one", "two"]
  }); // for more options see the documentation 
});
</script>
```

## Documentation

The Randomizer plugin is used by initiating it on the DOM element that you want to be the container. When initializing the plugin you have the ability to also send some options. The following are the default options.

```javascript
  {
  	audio : {
  		play : true,
  		url : 'media/drumroll.mp3',
  		type : 'audio/mpeg'
  	},
  	interval : 10000,
  	values : ["one", "two"]
  }
```

### Quick Tips

To disable the audio element, set play to false in the audio options.

The interval option determines for how long the plugin randomizes the values. Should be set to the same length as the audio track if used.

values should be set to an array of values that you want to randomize.

