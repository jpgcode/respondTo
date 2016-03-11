/*--
Mobile detection snippet based in window width
Author: Jose Pablo Granados
--*/

var breakpoint = 768;
var windowWidth = $(window).width();


var isMobile = function(){
	return (windowWidth > breakpoint)? false : true;
}