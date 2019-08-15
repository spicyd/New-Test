(function ($) {
	$(document).ready(function(){
		
		function clean(node){
		  for(var n = 0; n < node.childNodes.length; n ++)
		  {
			var child = node.childNodes[n];
			if
			(
			  child.nodeType === 8 
			  || 
			  (child.nodeType === 3 && !/\S/.test(child.nodeValue))
			)
			{
			  node.removeChild(child);
			  n --;
			}
			else if(child.nodeType === 1)
			{
			  clean(child);
			}
		  }
		}
		clean(document);
		

	$('.home_slider .flex-slider').flexslider({
	    easing: "swing",
		animation: "fade",
		controlNav: false,
		directionNav:false,
		slideshowSpeed: 7000,
		animationSpeed: 1500,
	  });
          
/**************************************************/
/*              Menu Dropdown on Hover            */
/**************************************************/
		$('.navbar-toggle').click(function(){
			$('.menu_inner').toggleClass('drop_menu');
			$(this).toggleClass('drop_menu');
        })
        
		/*$('.menu_inner li.dropdown a').hover(function(){
			$(this).children('ul.dropdown-menu').stop().slideToggle(2000);
        })*/
	
		/*$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});*/
        
        $('.menu_inner li:has(ul)').prepend('<span class="toChild">+</span>');
        
       /*$('.menu_inner li.dropdown').hover(function() {
          $(this).find('> ul.dropdown-menu').stop(true, true).delay(200).slideDown(500);
        }, function() {
          $(this).find('> ul.dropdown-menu').stop(true, true).delay(200).slideUp(500);
        });*/
        
    
/**************************************************/
/*                  Search Box Script             */
/**************************************************/          
    $(function(){
          var $searchlink = $('#searchtoggl');
          var $searchbar  = $('#searchbar');

          $('.searchtoggl').on('click', function(e){
            e.preventDefault();

            if($(this).attr('id') == 'searchtoggl') {
              if(!$searchbar.is(":visible")) { 
                // if invisible we switch the icon to appear collapsable
                //$searchlink.removeClass('fa-search').addClass('fa-search-minus');
              } else {
                // if visible we switch the icon to appear as a toggle
                //$searchlink.removeClass('fa-search-minus').addClass('fa-search');
              }

              $searchbar.slideToggle(300, function(){
                // callback after search bar animation
              });
            }
          });
        }); 
	
	})//onDocumentReady
    
    
//Menu Dropdown
    $(window).on('load resize',function(e){
        if ($(window).width() <= 992) {
            $('.menu_inner li.dropdown').unbind('mouseenter mouseleave');
            $('.menu_inner li.dropdown .toChild').click(function() {
                $(this).parent('.dropdown').find('> .dropdown-menu').stop(true, true).delay(200).slideToggle(500);
                $(this).toggleClass('clicked');
                if($(this).hasClass('clicked')){
                    $(this).text('-');
                } else {
                    $(this).text('+');
                }
            });
        } else {
            $('.menu_inner li.dropdown').bind('mouseenter mouseleave');
            $('.menu_inner li.dropdown').hover(function() {
              $(this).find('> ul.dropdown-menu').stop(true, true).delay(200).slideDown(500);
            }, function() {
              $(this).find('> ul.dropdown-menu').stop(true, true).delay(200).slideUp(500);
            });
        }
    });    
/**************************************************/
/*             Fixed Header On scroll             */
/**************************************************/

	/*$(window).scroll(function(){
		var sticky = $('.menu_section'),
		  scroll = $(window).scrollTop();
	
		if (scroll >= 210) sticky.addClass('on_scroll_header');
		else sticky.removeClass('on_scroll_header');
        })*/
	
/**************************************************/
/*              Scroll Top Function               */
/**************************************************/
	$(document).ready(function(e) {

	  // browser window scroll (in pixels) after which the "back to top" link is shown
	  var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('#scroll_top');
	
	  //hide or show the "back to top" link
	  $(window).scroll(function() {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible'):
		  $back_to_top.removeClass('is-visible is-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
		  $back_to_top.addClass('is-fade-out');
		}
	  });
	
	  //smooth scroll to top
	  $back_to_top.on('click', function(event) {
		event.preventDefault();
		$('body,html').animate({
		  scrollTop: 0,
		}, scroll_top_duration);
	  });
	
	});
	
	
})(jQuery);