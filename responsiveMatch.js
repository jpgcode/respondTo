var responsiveMatch = function(options){

	var breakpoints = { mobile: 767, tablet: 1023, desktop: 1279 },
		breakpoint,
		query;

	if(typeof(options) === 'string'){
		
		breakpoint = breakpoints[options];

		if(options === 'mobile'){
			query = '(max-width: '+ breakpoint +'px)';
		}else if(options === 'tablet'){
			query = '(min-width: '+ breakpoints['mobile'] +'px) and (max-width: '+ breakpoints[options] +'px)';
		}else{
			query = '(min-width: '+ breakpoints['tablet'] +'px)';
		}
	}else if(typeof(options) === 'number'){
		breakpoint = options;
	}else{
		console.error('You are passing an invalid parameter, please check responsiveMatch docs');
	}


	if(window.matchMedia !== undefined){
		return window.matchMedia(query).matches
	}

}