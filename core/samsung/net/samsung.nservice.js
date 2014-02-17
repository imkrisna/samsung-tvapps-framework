var Samsung 		= Samsung || new Object();
Samsung.NService 	= new Object();

Samsung.NService.Module			= null;
Samsung.NService.StatusCallback	= function(){};
Samsung.NService.ObtainCallback	= function(){};
Samsung.NService.EventCallback 	= function(){};

Samsung.NService.init = function(){
	Samsung.NService.Module = window.webapis.nservice || {};
};

Samsung.NService.onDeviceStatusChange = function(param){
	
};

Samsung.NService.onDeviceObtained = function(devices){
	
};

Samsung.NService.onDeviceEvent = function(event){
	
};