/*! Responsive Equations - European Central Bank */

var EQN = window.EQN || {};

EQN.responsive = (function() {
	
	function adaptContent() {
		$('.MathJax_CHTML').each(function() {
			$(this).css('font-size', '100%');
			//if(($(this).text() + $(this).parent().children('script').text()) == $(this).parent().text()) {
			if($(this).width() > 300) {	
				$(this).parent().addClass('eqn-equationParent');
				$(this).parent().css('min-height', $(this).parent().height() + 17);
				var equationToContainerWidthRatio = $(this).parent().width() / $(this).width();
				if(equationToContainerWidthRatio < 0.87) {
					dragHandler($(this).parent());
				} else if(equationToContainerWidthRatio < 1) {
					$(this).css('font-size', (Math.floor(equationToContainerWidthRatio * 100)-1) + '%');
				}
			}
		});
	};

	function isDraggable(el, direction) {
		direction = (direction === 'vertical') ? 'scrollTop' : 'scrollLeft';
		var result = !!el[direction];
		if(!result) {
			el[direction] = 1;
			result = !!el[direction];
			el[direction] = 0;
		}		
		return result;
	};
	
	function addGradient() {
		
		var addLeftGradient = function(el) {
			el.parent().parent().addClass('eqn-showLeft');
		};
		
		var addRightGradient = function(el) {
			el.parent().parent().addClass('eqn-showRight');
		};
		
		var removeLeftGradient = function(el) {
			el.parent().parent().removeClass('eqn-showLeft');
		};
		
		var removeRightGradient = function(el) {
			el.parent().parent().removeClass('eqn-showRight');
		};
		
		var gradientHandler = function(el) {
			var maxScrollLeft = el.scrollLeft() / (el.find('.MathJax_CHTML').width() - el.width());
			Math.round(maxScrollLeft * 10) != 0 ? addLeftGradient(el) : removeLeftGradient(el);
			Math.round(maxScrollLeft * 10) != 10 ? addRightGradient(el) : removeRightGradient(el); 
		};
		
		$('.eqn-equationParent').each(function() {
			if(isDraggable($(this)[0], 'horizontal')) {
				$(this).on('scroll',function() {gradientHandler($(this));});
				$(this).parent().css({'height': '100%'});
			} else {
				removeLeftGradient($(this));
				removeRightGradient($(this));
				$(this).parent().css({'height': 'unset'});
			}
		});
	};

	function dragHandler(elem) {
		var el = elem[0], 
			isDown = false, 
			startX, 
			scrollLeft;
		
		var start = function(e,el) {
			isDown = true;
			el.classList.add('active');
			startX = e.pageX - el.offsetLeft
			scrollLeft = el.scrollLeft;
		};
		
		var startTouch = function(e,el) {
			isDown = true;
			el.classList.add('active');
			startX = e.touches[0].pageX - el.offsetLeft;
			scrollLeft = el.scrollLeft;
		};
		
		var move = function(e,el) {
			if(!isDown) return;
			e.preventDefault();
			var x = e.pageX - el.offsetLeft;
			var walk = (x - startX) * 1;
			el.scrollLeft = scrollLeft - walk;
		};
		
		var moveTouch = function(e,el) {
			if(!isDown) return;
			e.preventDefault();
			var x = e.touches[0].pageX - el.offsetLeft;
			var walk = (x - startX) * 1;
			el.scrollLeft = scrollLeft - walk;
		};
		
		var end = function(el) {
			isDown = false;
			el.classList.remove('active');
		};
		
		el.addEventListener('mousedown', function(e) {
			start(e,el);
		}, false);
		
		el.addEventListener('mousemove', function(e) {
			move(e,el);
		}, false);
		
		el.addEventListener('mouseleave', function() {
			end(el);
		}, false);
		
		el.addEventListener('mouseup', function() {
			end(el);
		}, false);
		
		el.addEventListener('touchstart', function(e) {
			startTouch(e,el);
		}, false);
		
		el.addEventListener('touchmove', function(e) {
			moveTouch(e,el);
		}, false);
		
		el.addEventListener('touchend', function() {
			end(el);
		}, false);
		
	};

	var resize = function() {		
		adaptContent();
		addGradient();
	};
	
	var init = function() {
		$('math').parent().css({'opacity':'0'});
		MathJax.Hub.Config({
			MathMenu: {
				'showRenderer': false,
				'showFontMenu': false,
				'showLocale': false,
				'showMathPlayer': false,
				'showContext': false,
				'styles': {
					'.MathJax_MenuItem:nth-child(2)[role="separator"]': {'display': 'none'},
					'.MathJax_MenuItem:nth-child(3)[aria-haspopup="true"]': {'display': 'none'},
					'.MathJax_MenuItem:nth-child(4)[aria-haspopup="true"]': {'display': 'none'}
				}
			},
			'menuSettings': {
				'zoom': 'None',
				'zscale': '100%',
				'inTabOrder': true
			},
			showMathMenu: true
		});
		MathJax.Hub.Register.StartupHook('End', function() {
			adaptContent();
			//$('.eqn-equationParent').css({'opacity':'1'});
			$('.MathJax_CHTML').parent().css({'opacity':'1'});
			$('.eqn-equationParent').wrap('<div class="eqn-equationWrapper"><div class="eqn-equationContainer"></div></div>');
			addGradient();
		});
	};
	
	return {
		'init': init,
		'resize': resize
	};
		
})();
var EQN = window.EQN || {};

/*
** Responsive Equations
** -------------------------------------------- */
var ECB = window.ECB || {};
ECB.componentList = ECB.componentList || [];

{	
	// Add all components to componentList
	ECB.componentList = ECB.componentList.concat([
		EQN.responsive
	]);
}