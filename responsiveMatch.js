var responsiveMatch = function(options){

	var breakpoints = { mobile: 767, tablet: 1023, desktop: 1279 }, breakpoint, query, wrongParam = false;

	if(typeof(options) === 'string'){
		
		breakpoint = breakpoints[options];

		if(options === 'mobile'){
			query = '(max-width: '+ breakpoint +'px)';
		}else if(options === 'tablet'){
			query = '(min-width: '+ breakpoints['mobile'] +'px) and (max-width: '+ breakpoints[options] +'px)';
		}else if(options === 'desktop'){
			query = '(min-width: '+ breakpoints['tablet'] +'px)';
		}else{
			wrongParam = true;
		}

	}else if(typeof(options) === 'number'){
		breakpoint = options;
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