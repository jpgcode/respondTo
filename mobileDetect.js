/*--
Mobile detection snippet based in window width
Author: Jose Pablo Granados
--*/

var breakpoint = 768;

var isMobile = function(){
	if(window.matchMedia !=== undefined){
		return window.matchMedia("(max-width: "+ breakpoint +"px)").matches
	}else{
		var windowWidth = $(window).width();
		return (windowWidth > breakpoint)? false : true;
	}
}