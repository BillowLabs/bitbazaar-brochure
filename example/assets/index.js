window.onload = function(){
	var options = {
	  "particles": {
	    "number": {
	      "value": 40,
	      "density": {
	        "enable": true,
	        "value_area": 100
	      }
	    },
	    "color": {
				"value": ["#FFC700", "#BF9500", "#E5B300", "#7F6300"]
	    },
	    "opacity": {
	      "value": .8,
	      "random": true,
	      "anim": {
	        "enable": true,
	        "speed": .5,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 10,
	      "random": true,
	      "anim": {
	        "enable": true,
	        "speed": 10,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      // "color": "#15AB88",
				"color": "#FFC700",
	      "opacity": 0.2,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 2,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 140,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	}
	particlesJS("particle-background", options);
}
