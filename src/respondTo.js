/*--
 ** RespondTo Method. (c) 2016 Jose Pablo Granados
 ** Released under the MIT license
--*/

var respond = (function(options){

    var breakpoints = { mobile: 767, tablet: 1023, desktop: 1279 },
        breakpoint,
        query,
        wrongParam = false,
        errorMsg = 'Invalid parameter, check respondTo docs';


    function to(options){

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

        }else if(typeof(options) === 'number' && options % 1 === 0){
            query = '(min-width: '+ options +'px)';
        }else{
            wrongParam = true;
        }



        if(window.matchMedia !== undefined && !wrongParam){
            return window.matchMedia(query).matches;
        }else{
            console.warn(errorMsg);
            return false;
        }
    }

    return {
        to: to
    }

})();
