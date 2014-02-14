var System 	= System || new Object();
System.Info	= new Object();

System.Info.NETWORK_TYPE_DISCONNECTED	= -1;
System.Info.NETWORK_TYPE_WIRELESS		= 0;
System.Info.NETWORK_TYPE_WIRED			= 1;

System.Info.FIRMWARE_PREFIX				= "T-INFOLINK";

System.Info.PARAM_KEY_SMARTHUB			= "mgrver";
System.Info.PARAM_KEY_STORAGE_SIZE		= "totalMemory";
System.Info.PARAM_KEY_COUNTRY			= "country";
System.Info.PARAM_KEY_COUNTRY_SAMSUNG	= "samsung_country";
System.Info.PARAM_KEY_SERVER_TYPE		= "server";

System.Info.getWidgetId = function(){
	return curWidget.id;
};

System.Info.is3DSupported = function(){
	var check = sf.env.get3DSupported();
	if (check === sf.env.SUPPORT3D_SUPPORTED){		
		return true;
	}
	else return false;
};

System.Info.isNetworkActive = function(){
	Samsung.SEF.loadNetwork();
	
	var activeConnection = Samsung.SEF.Network.GetActiveType();
	if (activeConnection === -1){
		return false;
	}
	else{
		var physicalConnection = Samsung.SEF.CheckPhysicalConnection(activeConnection);
		if (physicalConnection === 1){
			return true;
		}
		else{
			return false;
		}
	}
};

System.Info.getNetworkType = function(){
	Samsung.SEF.loadNetwork();	
	return Samsung.SEF.Network.GetActiveType();
};

System.Info.getLocalIPAddress = function(){
	Samsung.SEF.loadNetwork();	
	if (System.Info.isNetworkActive() === true){
		return Samsung.SEF.Network.GetIP(System.Info.getNetworkType());
	}
	else{
		return null;
	}
};

System.Info.getMACAddress = function(networkType){
	if (!networkType) networkType = System.Info.getNetworkType();
	
	Samsung.SEF.loadNetwork();	
	return Samsung.SEF.Network.GetMAC(networkType);
};

System.Info.getDUID = function(){
	Samsung.SEF.loadNNavi();	
	return Samsung.SEF.NNavi.GetDUID(System.Info.getMACAddress(System.Info.NETWORK_TYPE_WIRED));
};

System.Info.getDeviceModel = function(){
	Samsung.SEF.loadTV();
	return Samsung.SEF.TV.GetProductCode(1);
};

System.Info.getFirmware = function(){
	Samsung.SEF.loadNNavi();
	return Samsung.SEF.NNavi.GetFirmware();
};

System.Info.getFirmwareVersion = function(){
	var fw 		= System.Info.getFirmware();
	var fwCode	= fw.replace(System.Info.FIRMWARE_PREFIX, "");
	var fwElem	= fwCode.split("-");
	return Number(fwElem[1]);
};

System.Info.getYear = function(){
	var fw 		= System.Info.getFirmware();
	var fwCode	= fw.replace(System.Info.FIRMWARE_PREFIX, "");
	var fwElem	= fwCode.split("-");
	return Number(fwElem[0]);
};

System.Info.getSamsungSfVersion = function(){
	return sf.core.version();
};

System.Info.getApplicationVersion = function(){
	return sf.env.getAppVersion();	
};

System.Info.getApplicationResolution = function(){
	return sf.env.getResolution();
};

System.Info.getSmartHub = function(){
	return System.Info.getLaunchParameter(System.Info.PARAM_KEY_SMARTHUB);
};

System.Info.getStorageSize = function(){
	return Number(System.Info.getLaunchParameter(System.Info.PARAM_KEY_STORAGE_SIZE));
};

System.Info.getCountry = function(){
	return System.Info.getLaunchParameter(System.Info.PARAM_KEY_COUNTRY);
};

System.Info.getSamsungCountry = function(){
	return System.Info.getLaunchParameter(System.Info.PARAM_KEY_COUNTRY_SAMSUNG); 
};

System.Info.getServerType = function(){
	return System.Info.getLaunchParameter(System.Info.PARAM_KEY_SERVER_TYPE);
};

System.Info.getLaunchParameter = function(key){
	var value 		= null;
	var parameter	= window.location.search;
	var elements	= parameter.split("&");
	
	for (var i = 0; i < elements.length; i++){
		var keyvalue = elements[i].split("=");
		if (keyvalue[0] === key || keyvalue[0] === ("?" + key)){
			value = keyvalue[1];
			break;
		}
	}
	
	return value;
};