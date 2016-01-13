$(function() {
	
	//find-block select
	$(".options-element__value").click(function() {
		var clickThisId = $(this).attr("data-type");
		$('.options-element__select').hide();
		$('.options-element__select[data-type="' + clickThisId + '"]').fadeIn(500);
	});
	
	//find-block select
	$(".options-element__select li").click(function() {
		var clickThisSelIt = $(this).text();
		var clickThisId = $(this).parent(".options-element__select").attr("data-type");
		$('.options-element__value[data-type="' + clickThisId + '"]').text(clickThisSelIt);
		$('.options-element__select[data-type="' + clickThisId + '"]').hide();
	});
	
	//main menu offers visible
	$('.s-menu-list-block ul li').mouseenter(function() {
		var clickThisId = $(this).attr("rel");
		$('.s-menu-act-block div.s-menu-act-element').hide();
		$('.s-menu-act-block div.s-menu-act-element[rel="' + clickThisId + '"]').fadeIn(200);
	});
});

//find-block hide if miss
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".options-element__select"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.hide(); // скрываем его
	}
});

/*$(document).click( function(event){
  if( $(event.target).closest(".options-element__select").length ) return;
	  $(".options-element__select").hide();
  event.stopPropagation();
});*/

$(document).ready(function(){
	//slider index
	$('.banner-wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});
	
	//gallery
	$(".fancybox").fancybox();
	  
	  //paralax
	$('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
	
	//menu second lvl width
	/*var widthMenuSLA;
	widthMenuSLA = 0;
	$('ul.second-menu li.active ul li').each(function(){
        var widthMenuSL = $(this).outerWidth();
		widthMenuSLA = widthMenuSLA + widthMenuSL;
    });
	$('ul.second-menu li.active ul').width(widthMenuSLA+24);*/
	
	/*if ( $(this).children('ul').length > 0 ) $('ul.second-menu > li.active').css({ marginBottom: 32 });*/
	
	//menu second lvl position
	/*$('ul.second-menu > li.active').each(function(){
		var posACt = $(this).position().top;
		posACt = Math.round(posACt)
		$(this).children('ul').css({ top: posACt + 35 });
		$(this).css({ marginBottom: 32 });
	});*/
	
	/*$('ul.second-menu > li').mouseenter(function() {
		if ( !$(this).hasClass("active") ) {
			//no active
			$('ul.second-menu li ul').fadeOut(50);
			$('ul.second-menu li.active').css({ marginBottom: 0 });
			$(this).children('ul').fadeIn(100);
			$(this).css({ marginBottom: 32 });
		}else{
			//have active
			$(this).children('ul').fadeIn(100);
			$(this).css({ marginBottom: 32 });
		}
	
		/*var clickThisId = $(this).attr("rel");
		$('ul.second-menu li ul').hide();
		$('.s-menu-act-block div.s-menu-act-element[rel="' + clickThisId + '"]').fadeIn(200);/
	});*/
	
	/*$('ul.second-menu > li').mouseenter(function() {
			
			if ( $(this).children('ul').length > 0 ) {
				$('ul.second-menu li ul').stop(true, false).fadeOut(100);
				$('ul.second-menu li').css({ marginBottom: 0 });
				$(this).children('ul').fadeIn(100);
				$(this).css({ marginBottom: 32 });
			}else{
				
			}
	});
	
	$('ul.second-menu > li').mouseleave(function() {
		if ( $('ul.second-menu > li.active').children('ul').length > 0 ) {
			$('ul.second-menu li ul').stop(true, false).fadeOut(100);
			$('ul.second-menu li').css({ marginBottom: 0 });
			$('ul.second-menu > li.active ul').fadeIn(100);
			$('ul.second-menu > li.active').css({ marginBottom: 32 });
		}else{
			$('ul.second-menu li ul').stop(true, false).fadeOut(100);
			$('ul.second-menu li').css({ marginBottom: 0 });
		}
	});*/
	
	
	
});

