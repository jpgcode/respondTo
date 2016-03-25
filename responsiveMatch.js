var responsiveMatch = function(options){

	var breakpoints = { mobile: 767, tablet: 1023, desktop: 1279 }, breakpoint, query, wrongParam = false;

	if(typeof(options) === 'string'){
		
		breakpoint = breakpoints[options];

		switch(options){
			case 'mobile':
				query = '(max-width: '+ breakpoint +'px)';
			break;
			case 'tablet':
				query = '(min-width: '+ breakpoints['mobile'] +'px) and (max-width: '+ breakpoints[options] +'px)';
			break;
			case 'desktop':
				query = '(min-width: '+ breakpoints['tablet'] +'px)';
			break;
			default:
				wrongParam = true;
			break;
		}

	}else if(typeof(options) === 'number'){
		if(options % 1 === 0){
			query = '(min-width: '+ options +'px)';
		}else{
			wrongParam = true;
		}
	}else{
		wrongParam = true;
	}


	if(window.matchMedia !== undefined){
		if(!wrongParam){
			return window.matchMedia(query).matches;
		}else{
			console.warn('You are passing an invalid parameter, please check responsiveMatch docs')
			return false;
		}
	}else{
		console.warn('You are passing an invalid parameter, please check responsiveMatch docs')
		return false;
	}

}