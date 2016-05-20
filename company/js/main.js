$(document).ready(function(){

    // Twitter - sidebar
    // -----------------------------------------------------------------------------
    if ($('#twitter').length) {
        $.getJSON('twitter.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=dxthemes&count=3'), function(tweets){
            $("#twitter").html(tz_format_twitter(tweets));
        });
    } else {}

    // Twitter - footer
    // -----------------------------------------------------------------------------
    if ($('#twitter-foot').length) {
        $.getJSON('twitter.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=dxthemes&count=3'), function(tweets){
            $("#twitter-foot").html(tz_format_twitter(tweets));
        });
    } else { }

    //prettyPhoto
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    $("a[rel^='prettyPhoto']").prettyPhoto();

    $('.da-thumbs > li, .da-thumbs > article').hoverdir();

    // animate hover div
    $('.do-hover').live("mouseover", function(){
        $(this).stop();
        $(this).animate({opacity: 1}, 200);
        $(this).find('.p-view').animate({left: '50%'}, 200);
        $(this).find('.p-link').animate({right: '50%'}, 200);
    });
    $('.do-hover').live("mouseleave", function(){
        $(this).stop();
        $(this).animate({opacity: 0}, 200);
        $(this).find('.p-view').animate({left: '0'}, 300);
        $(this).find('.p-link').animate({right: '0'}, 300);
    });

    //Menu
    jQuery('#menu > ul').superfish({ 
        delay:       500,
        animation:   {opacity:'show', height:'show'}, 
        speed:       'fast',                          
        autoArrows:  true

    });
    $('.sf-sub-indicator').remove();
    (function() {
		var $menu = $('#menu ul'),
			optionsList = '<option value="" selected>Menu...</option>';

		$menu.find('li').each(function() {
			var $this   = $(this),
				$anchor = $this.children('a'),
				depth   = $this.parents('ul').length - 1,
				indent  = '';

			if( depth ) {
				while( depth > 0 ) {
					indent += ' - ';
					depth--;
				}
			}
			optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
		}).end().after('<select class="res-menu">' + optionsList + '</select>');

		$('.res-menu').on('change', function() {
			window.location = $(this).val();
		});
		
	})();
    
    $(".our-blog article").hover(function () {
    	$(this).find("img").stop(true, true).animate({ opacity: 0.7 }, 300);
    }, function() {
    	$(this).find("img").stop(true, true).animate({ opacity: 1 }, 300);
    });
    
    //Flickr Widget Footer
    $('#footer .flickr').jflickrfeed({
        limit: 8,
        qstrings: {
            id: '36621592@N06'
        },
        itemTemplate: ''+
            '<li>'+
                '<a rel="prettyPhoto[flickr]" href="{{image}}" title="{{title}}">' +
                    '<img src="{{image_s}}" alt="{{title}}" />' +
                '</a>' +
            '</li>'
    }, function(data) {
        $("a[rel^='prettyPhoto']").prettyPhoto();
    });

	//Flickr Widget Sidebar
    $('#sidebar .sidebar-flickr').jflickrfeed({
		limit: 8,
		qstrings: {
			id: '36621592@N06'
		},
		itemTemplate: '<li>'+
						'<a rel="prettyPhoto[flickr]" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$("a[rel^='prettyPhoto']").prettyPhoto();

        $("#footer .flickr li").hover(function () {						 
    	   $(this).find("img").stop(true, true).animate({ opacity: 0.5 }, 800);
        }, function() {
    	   $(this).find("img").stop(true, true).animate({ opacity: 1.0 }, 800);
        });
	});

	//Portfolio
	var $portfolioClone = $(".filtrable").clone();
	$("#filtrable a").live('click', function(e){
		
		$("#filtrable li").removeClass("current");	
		
		var $filterClass = $(this).parent().attr("class");
        var $filteredPortfolio = $portfolioClone.find("article");

		if ( $filterClass == "all" ) {
			$filteredPortfolio = $portfolioClone.find("article");
		} else {
			$filteredPortfolio = $portfolioClone.find("article[data-type~=" + $filterClass + "]");
		}
	
		$(".filtrable").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeOutQuint' 
		}, function(){
			
            $('.da-thumbs > li, .da-thumbs > article, .da-thumbs > div').hoverdir();
            
            $("a[rel^='prettyPhoto']").prettyPhoto();

		});

		$(this).parent().addClass("current");
        
		e.preventDefault();
	});

    // To Top Button
    $(function(){
        $().UItoTop({ easingType: 'easeOutQuart' });
    });
                       
});

$(window).load(function() {

	$("#mainslider").flexslider({
		animation: "slide",
        slideshow: false, // ***
        useCSS: false,
		controlNav: true,
		animationLoop: false,
		smoothHeight: true
	});

    $(function () {
        $(".lightbox-image").append("<span></span>");
        $(".lightbox-image").hover(function () {
            $(this).find("img").stop().animate({opacity:0.5}, "normal")
        }, function () {
            $(this).find("img").stop().animate({opacity:1}, "normal")
        })
    });

});
