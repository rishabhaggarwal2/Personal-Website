	  $(document).on('pagebeforecreate', function( e ) {
            $( "input, textarea, select", e.target ).attr( "data-role", "none" );
            	$(".alertmob, .alertpc").fadeOut();
      });


$(document).ready(function(){
	$(".ws3, .ws2, .ws1, .ws4, .ws5, .ws6").slideUp();
	var alertflag=0;
	//$(".skillset div").addClass("dome");
	//$("section div").fadeOut();

$(".nav ul li.l1").click(function(){
	var link_pos1 = $(".header").offset().top;
	$('html, body').animate({scrollTop:link_pos1}, 500);
});

$(".nav ul li.l2").click(function(){
	var link_pos2 = $("section.about_section").offset().top;
	$('html, body').animate({scrollTop:link_pos2}, 500);
});

$(".nav ul li.l3").click(function(){
	var link_pos3 = $("section.works_section").offset().top;
	$('html, body').animate({scrollTop:link_pos3}, 500);
});

$(".nav ul li.l4").click(function(){
	var link_pos4 = $("section.skills_section").offset().top;
	$('html, body').animate({scrollTop:link_pos4}, 500);
});

$(".nav ul li.l5").click(function(){
	var link_pos5 = $("section.contact_section").offset().top;
	$('html, body').animate({scrollTop:link_pos5}, 500);
});
	
	
	
if ( $(".sexymetellwidth").css("width") === "0px") {	
	
	$(window).scroll(function(){
	if(alertflag===0)
	{
		if(768<=$(window).scrollTop()){
			alertflag=1;
			$(".alertmob").fadeIn();
		}
		var timer = setTimeout(function() {
			$(".alertmob").fadeOut();
		}, 5000);;
	}
	});

	$(".alertmob").click(function(){
		$(this).fadeOut();
	});
}
	

if ( $(".sexymetellwidth").css("width") === "1000px") {
	
	$(window).scroll(function(){
	if(alertflag===0)
	{
		if(768<=$(window).scrollTop()){
			alertflag=1;
			$(".alertpc").fadeIn();
		}
		var timer = setTimeout(function() {
			$(".alertpc").fadeOut();
		}, 3000);;
	}
	});

	$(".alertpc").click(function(){
		$(this).fadeOut();
	});


	$(".work1a").click(function(){
		$(".ws3, .ws2, .ws4, .ws5, .ws6").slideUp();
		$(".ws1").slideToggle();
		var x = $("section.works_section").offset().top;
		$('html, body').animate({scrollTop:x}, 500);
	});

	$(".work1b").click(function(){
		$(".ws3, .ws1, .ws4, .ws5, .ws6").slideUp();
		$(".ws2").slideToggle();
		var x = $("section.works_section").offset().top;
		$('html, body').animate({scrollTop:x}, 500);
	});

	$(".work1c").click(function(){
		$(".ws2, .ws1, .ws4, .ws5, .ws6").slideUp();
		$(".ws3").slideToggle();
		var x = $("section.works_section").offset().top;
		$('html, body').animate({scrollTop:x}, 500);
	});

	$(".work2a").click(function(){
		$(".ws3, .ws2, .ws1, .ws5, .ws6").slideUp();
		$(".ws4").slideToggle();
	});

	$(".work2b").click(function(){
		$(".ws3, .ws2, .ws1, .ws4, .ws6").slideUp();
		$(".ws5").slideToggle();
	});

	$(".work2c").click(function(){
		$(".ws3, .ws2, .ws1, .ws4, .ws5").slideUp();
		$(".ws6").slideToggle();
		$(".skillset div").removeClass("dome");
	});
}
		$(".ui-icon.ui-icon-loading").hide();
	  $("body").on("swiperight",function(){
	    $(".nav").css("left","0px");
	    $(".website").css("left","300px");
	  });   
	  $("body").on("swipeleft",function(){
	    $(".nav").css("left","-300px");
	    $(".website").css("left","0px");
	  });    

	 $(".submit").click(function(){
	 	$("form").submit();
	 });


	 $("body, html").scroll(function(){
		var link_posa1 = $(".header").offset().top;
		var link_posa2 = $("section.about_section").offset().top;
		var link_posa3 = $("section.works_section").offset().top;
		var link_posa4 = $("section.skills_section").offset().top;
		var link_posa5 = $("section.contact_section").offset().top;
		if(link_posa2<=$(window).scrollTop()){
			$("section div").fadeIn();
		}
		
	});


});
