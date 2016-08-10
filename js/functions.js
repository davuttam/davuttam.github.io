function mycarousel_initCallback(carousel) {
    jQuery('.jcarousel-control a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });
}
function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
	 $('.jcarousel-control a').removeClass('active');
	 $('.jcarousel-control a').eq(idx-1).addClass('active');
}

$(function() {
	$('.field, textarea').focus(function() {
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });

    $(".image-slider").jcarousel({
    	auto: 5,
        scroll: 1,
        animation: 'slow',
        itemFirstInCallback: mycarousel_itemFirstInCallback,
        initCallback: mycarousel_initCallback,
        vertical: true,
        buttonNextHTML: null,
 		buttonPrevHTML: null
    });

    $(".slider-second").jcarousel({
    	auto: 5,
        scroll: 1,
        wrap: 'circular',
        animation: 'slow'
    });

    $('.image-slider a').click(function(){
        $(this).parents('.jcarousel-control').find('a').removeClass('active');
        $(this).addClass('active');
    });

    $('#navigation a').hover(function() {
    	$(this).addClass('hover');
    }, function() {
    	$(this).removeClass('hover');
    });
});