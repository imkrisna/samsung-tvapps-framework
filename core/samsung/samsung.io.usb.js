var Samsung 	= Samsung 		|| new Object();
Samsung.IO 		= Samsung.IO 	|| new Object();
Samsung.IO.USB	= new Object();

Samsung.IO.USB.ROOT_PATH	= "/dtv/usb/";
Samsung.IO.USB.MOUNTED_PATH	= null;

Samsung.IO.USB.getUSBCount = function(){
	return Samsung.SEF.Storage.GetUSBListSize();
};

Samsung.IO.USB.getUSBMountPath = function(index, partition){
	if (!partition) partition = 0;
	
	var usbDeviceId = Samsung.SEF.Storage.GetUSBDeviceID(index);	
	return Samsung.IO.USB.ROOT_PATH + Samsung.SEF.Storage.GetUSBMountPath(usbDeviceId, partition);
};

Samsung.IO.USB.mountUSB = function(index, partition){
	Samsung.IO.USB.MOUNTED_PATH = Samsung.IO.USB.getUSBMountPath(index, partition);
};

Samsung.IO.USB.loadFile = function(usbRelativePath){
	if (Samsung.IO.USB.MOUNTED_PATH === null) return;	
	return Samsung.IO.loadFile(Samsung.IO.USB.MOUNTED_PATH + usbRelativePath);
};