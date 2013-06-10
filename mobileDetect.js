/*--
JPGMobileDetect
Author: Jose Pablo Granados
Email: jpgcodecr@gmail.com
--*/

var JPGMobileDetect = {
	devicesToDetect: {
		0:'Android',
		1:'iPhone',
		2:'iPod',
		3:'symbian',
		4:'Windows CE',
		5:'Windows Phone'
	},
	getDevice: function(){
		var devicesToDetect = this.devicesToDetect,
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