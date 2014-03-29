var Samsung = Samsung || new Object();
Samsung.IO 	= new Object();

Samsung.IO.FILE_COMMON_DIR	= curWidget.id + STRING.SLASH;
Samsung.IO.FILE_MODE_READ	= "r";
Samsung.IO.FILE_MODE_WRITE	= "w";

Samsung.IO.File 			= new FileSystem();
Samsung.IO.FileDescriptor	= null;
Samsung.IO.FileString		= STRING.EMPTY;

Samsung.IO.loadFile = function(path){
	Samsung.IO.FileDescriptor = Samsung.IO.File.openFile(path, Samsung.IO.FILE_MODE_READ);
	if (!Samsung.IO.FileDescriptor){
		return STRING.EMPTY;
	}
	else{
		Samsung.IO.FileString = Samsung.IO.FileDescriptor.readAll();
		Samsung.IO.File.closeFile(Samsung.IO.FileDescriptor);
		return Samsung.IO.FileString;
	}
};

Samsung.IO.loadJSONFile = function(filename, isShared){
	if (!isShared) isShared = false;
	
	var targetPath = filename;
	if (false === isShared) targetPath = Samsung.IO.FILE_COMMON_DIR + filename;
	
	Samsung.IO.FileDescriptor = Samsung.IO.File.openCommonFile(targetPath, Samsung.IO.FILE_MODE_READ);
	if (!Samsung.IO.FileDescriptor){
		return null;
	}
	else{
		var loadedObject		= null;
		Samsung.IO.FileString 	= STRING.EMPTY;
		Samsung.IO.FileString	= Samsung.IO.FileDescriptor.readAll();
		
		try{
			loadedObject = eval("(" + Samsung.IO.FileString + ")");
		}
		catch (error){
			loadedObject = null;
		}
		
		Samsung.IO.File.closeCommonFile(Samsung.IO.FileDescriptor);
		Samsung.IO.FileString = STRING.EMPTY;
		return loadedObject;
	}
	
};

Samsung.IO.saveJSONFile = function(jsonObject, filename, isShared){
	if (!isShared) isShared = false;
	
	var targetPath = filename;
	if (false === isShared) targetPath = Samsung.IO.FILE_COMMON_DIR + filename;
	
	Samsung.IO.FileDescriptor = Samsung.IO.File.openCommonFile(targetPath, Samsung.IO.FILE_MODE_WRITE);
	if (!Samsung.IO.FileDescriptor){
		Samsung.IO.createCommonDir();
		Samsung.IO.FileDescriptor = Samsung.IO.File.openCommonFile(targetPath, Samsung.IO.FILE_MODE_WRITE);
	}
	
	Samsung.IO.FileString = JSON.stringify(jsonObject);
	Samsung.IO.FileDescriptor.writeAll(Samsung.IO.FileString);
	Samsung.IO.File.closeCommonFile(Samsung.IO.FileDescriptor);
	
	Samsung.IO.FileString = STRING.EMPTY;
};

Samsung.IO.createCommonDir = function(){
	if (Samsung.IO.File.isValidCommonPath(curWidget.id) !== 1){
		Samsung.IO.File.createCommonDir(curWidget.id);
	}
};