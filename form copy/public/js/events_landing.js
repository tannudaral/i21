

let i=0;

$(document).ready(function() {
	navNumbers();
	backToDefault();
	
	// show hovered li stuff
	$('.main-menu').on('mouseover', 'li', function() {
		showTarget($(this));
	});

	// show default .active li stuff
	$('.main-menu').on('mouseleave', backToDefault);
	
	// change active list item
	$('.main-menu').on('click', 'li', function() {
		changeActive($(this));
	});
	
	// toggle menu
	$('.toggle').on('click', toggleMenu);
	
	// for showcase only
	var tl = new TimelineMax(),
			body = $('body'),
			header = $('header'),
			content = $('.content p'),
			toggle = $('.toggle'),
			nav = $('nav');
	
	
	
	tl.to(header, .25, {
		opacity: 1,
		// delay: .5
	});
	
	tl.to(content, .25, {
		opacity: 1
	}, '-=.25');
	// changed from 3 to 0
	tl.call(function() {
		toggleMenu();
	}, null, null, 0);
	// changed from 4 to 0
	tl.call(function() {
		toggleMenu();
	}, null, null, 0);

});

// toggle menu
function toggleMenu() {
	var toggle = $('.toggle');
	var nav = $('nav');
	
	if(toggle.hasClass('clicked')) {
		toggle.removeClass('clicked');
		nav.removeClass('open');
		console.log('remove open');
		setTimeout(function() {
			console.log('add hidden');
			nav.addClass('hidden');
		}, 500);
	} else {
		nav.removeClass('hidden');
		toggle.addClass('clicked');
		nav.addClass('open');
	}
}

// give the list items numbers
function navNumbers() {
	var sum = $('.main-menu li').length;
	var i = 0;
	var x = 0;

	$('.showcase-menu li').each(function() {
		$(this).attr('data-target', x);
		x++;
	});
	
	$('.main-menu li').each(function() {
		var number = ('0' + i).slice(-2);
		var numberElement = '<div class="number"><span>'+number+'</span></div>';
		$(this).prepend(numberElement);
		$(this).attr('data-target', i);
		i++;
	});
}


// show the hovered list item stuff
function showTarget(e) {
	$('.main-menu li').removeClass('hover');
	
	var target = $(e).attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();
	
	showcaseHeight = (showcaseHeight * target) * -1;
	
	$('.showcase-menu').css({
		top: showcaseHeight
	});
	
	$(e).addClass('hover');
}

// show the list item stuff of .active
function backToDefault() {
	$('.main-menu li').removeClass('hover');
	
	var activeItem = $('.main-menu li.active');
	var target = activeItem.attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();
	
	showcaseHeight = (showcaseHeight * target) * -1;
	
	$('.showcase-menu').css({
		top: showcaseHeight
	});
	
	activeItem.addClass('hover');
}


// change active list item
function changeActive(e) {
	$('.main-menu li').removeClass('active');
	$(e).addClass('active');
}










var ping = new Audio('http://tmp.janustech.net/notes/pin.mp3');
var timelines = {};

$('.content .circleX').each(function () {
  var $this = $(this);
  var id = '#' + $this.attr('id');
  var tl = new mojs.Timeline();

  const circleX = new mojs.Html({
    el: id,
    left: '50%',
    top: '50%',
    scale: {
      1: 0 },

    duration: 500,
    easing: 'cubic.out' }).
  then({
    scale: {
      0: 1,
      duration: 500 } });



  const burst = new mojs.Burst({
    parent: id,
    radius: {
      0: 200 },

    count: 7,
    children: {
      fill: { 'cyan': 'yellow' },
      radius: 10,
      duration: 2000 } });



  tl.add(circleX, burst);

  timelines[$this.attr('id')] = tl;
});

var stopX = $('#main-notice').parent().width();

stopX += $('#main-notice').width() / 2 - 100;

const notice = new mojs.Html({
  el: '#main-notice',
  x: {
    0: 1000 },

  duration: 2000,
  easing: 'cubic.in' });


notice.play();

//new MojsPlayer({ add: notice });

$('.circleX').on('click', function (e) {
  var tl = timelines[$(this).attr('id')];

  ping.play();
  tl.replay();
});


















/*js crousel*/

(function(e) {
	e.fn.circle = function(t) {
		var n = e.extend({
			speed: "5000"
		}, t);
		return this.each(function() {
			function t() {
				var e = i.find("li.block.active").index();
				c.removeClass("active"), c.eq(e).addClass("active")
			}

			function o() {
				var n;
				i.addClass("disable-hover"), i.stop(!0, !0).animate({
					rotatedeg: p.deg += p.step
				}, {
					duration: 400,
					step: function(t) {
						t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
					},
					complete: function() {
						p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
					}
				}, "ease")
			}

			function r() {
				i.addClass("disable-hover"), 
				  i.stop(!0, !0).animate(
				  {
					rotatedeg: p.deg += p.step
				  }, 
				  {
					duration: 400,
					step: function(t) {
						t >= 360 ? t -= 360 : t <= -360 && (t += 360), 
						  e(this).css("transform", "rotate(" + t + "deg)"), 
						  e(this).css("-webkit-transform", "rotate(" + t + "deg)")
					},
					complete: function() {
						p.active = i.find("li.active"), 
						  i.is(":animated"), 
						  i.removeClass("disable-hover")
					}
				}, "ease")
			}
			var i = e(this),
				s = i.find("li").length,
				a = i.find(" > li .icon"),
				l = "count" + s,
				u = 0,
				c = i.next().find(".animate"),
				p = {
					duration: n.speed,
					deg: 0,
					step: u,
					active: i.find("li.active"),
					direction: "left"
				};
			switch (s) {
				case 10:
					u = -36;
					break;
				case 9:
					u = -40;
					break;
				case 8:
					u = -45;
					break;
				case 7:
					u = -51.5;
					break;
				case 6:
					u = -60;
					break;
				case 5:
					u = -72;
					break;
				case 4:
					u = -90;
					break;
				case 3:
					u = -120;
					break;
				case 2:
					u = -180;
					break;
				case 1:
					u = -360
			}
			i.addClass(l);
			var d = u - 2 * u;
			i.find("> li").first().addClass("active"),
			  i.find("> li").first().find("a").attr("href"),
			  c.eq(0).addClass("active"), 
			  e(a).on("click", function() {
				var n = e(this).parent().index() - i.find("li.active").index();
				i.children("li").removeClass("active"), 
				  e(this).parent().addClass("active"), 
				  p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360), 
				  n * d <= -288 && (p.step = -n * d - 360), 
				  r(), p.step = u, p.direction = "left", t()
			});
			var f = i.parent().find("div.next"),
				h = i.parent().find("div.prev");
			f.on("click", function() {
				i.is(":animated") || (p.direction = "left", p.step = u, o())
			}), h.on("click", function() {
				i.is(":animated") || (p.direction = "right", p.step = d, o())
			})
		})
	}
}(jQuery));


$(function () {
//Background image
$('div').each(function () {
	var url = $(this).attr('data-image');
	if (url) {
		$(this).css('background-image', 'url(' + url + ')');
	}
});

$('section').each(function () {
	var url = $(this).attr('data-image');
	if (url) {
		$(this).css('background-image', 'url(' + url + ')');
	}
});

// Service Auto height circle 
function autoHeightCircle() {
	var circle = $('.circle--rotate'),
		circleInner = $('.animate-wrapper'), 
		circleH = circle.width(),
		circleInnerH = circleInner.width();
	circle.height(circleH);
	circleInner.height(circleInnerH);
}

$("#circle--rotate").circle();
autoHeightCircle();
$(window).resize(function () {
	autoHeightCircle();
});
});