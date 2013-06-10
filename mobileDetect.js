/*--
JPGMobileDetect
Author: Jose Pablo Granados
Email: jpgcodecr@gmail.com
--*/

var JPGMobileDetect = {
	getDevice: function(devicesToDetect){
		var devicesToDetect = devicesToDetect,
			agent           = navigator.userAgent.toLowerCase(),
			devObjectLength = Object.keys(devicesToDetect).length,
			futureRegex 	= "";


		for (var i=0; i < devObjectLength; i++){
			futureRegex+= devicesToDetect[i] + "";
			(i == (devObjectLength-1)) ? futureRegex+= "/i" : futureRegex+= "|";
		}
	
		presentRegex = new RegExp(futureRegex.toLowerCase());
		
		if(agent.match(presentRegex)){
			return agent.match(presentRegex)[0];
		}
		
	}
}