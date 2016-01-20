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
	
	
});

