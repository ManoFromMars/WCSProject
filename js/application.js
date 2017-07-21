$(document).ready(function(){
 		
/*Animation logo*/
 		$("img").mouseenter(function(){
        $(this).animate({
            height: '+=15px',
            width: '+=15px'
        }, 'fast');
    });
 		$("img").mouseleave(function(){
        $(this).animate({
            height: '-=15px',
            width: '-=15px'
        }, 'fast');
    });

/*Message boutons*/
		$( ".button" ).click(function() {
  		$(this).css("background-color", "#aa0000");
  		$(this).text("DONE! OUR WILDEST THANKS!");
});

});