var Samsung 		= Samsung || new Object();
Samsung.NService 	= new Object();

Samsung.NService.Module			= null;
Samsung.NService.StatusCallback	= function(){};
Samsung.NService.ObtainCallback	= function(){};
Samsung.NService.EventCallback 	= function(){};

Samsung.NService.init = function(){
	Samsung.NService.Module = window.webapis.nservice || {};
	Samsung.NService.Module.registerManagerCallback(Samsung.NService.onDeviceStatusChange);
	Samsung.NService.Module.getNServiceDevices(Samsung.NService.onDeviceObtained);
};

Samsung.NService.onDeviceStatusChange = function(param){
	switch (Number(param.eventType)){
		case Samsung.NService.Module.MGR_EVENT_DEV_CONNECT:
			Samsung.NService.notifyConnected();
			break;
		case Samsung.NService.Module.MGR_EVENT_DEV_DISCONNECT:
			Samsung.NService.notifyDisconnected();
			break;
		default:
			break;
	}
	Samsung.NService.Module.getNServiceDevices(Samsung.NService.onDeviceObtained);
};

Samsung.NService.onDeviceObtained = function(devices){
	if (devices.length > 0 && devices[0] !== null && devices[0].getType() === Samsung.NService.Module.DEV_SMART_DEVICE){
		(devices[0]).registerDeviceCallback(Samsung.NService.onDeviceEvent);
	}
};

Samsung.NService.onDeviceEvent = function(event){
	switch (Number(event.eventType)){
		case Samsung.NService.Module.DEV_EVENT_MESSAGE_RECEIVED:
			Samsung.NService.notifyMessage(event.eventData.message);
			break;
	}
};

Samsung.NService.notifyConnected = function(){
	
};

Samsung.NService.notifyDisconnected = function(){
	
};

Samsung.NService.notifyMessage = function(){
	
};