var System 	= System || new Object();
System.Log 	= new Object();

System.Log.MODE_DEBUGGING	= "SYSTEM_LOG_MODE_DEBUGGING";
System.Log.MODE_DEVELOPMENT	= "SYSTEM_LOG_MODE_DEVELOPMENT";
System.Log.MODE_PRODUCTION	= "SYSTEM_LOG_MODE_PRODUCTION";

System.Log.LEVEL_VERBOSE	= 10;
System.Log.LEVEL_DEBUG		= 20;
System.Log.LEVEL_INFO		= 30;
System.Log.LEVEL_WARNING	= 40;
System.Log.LEVEL_ERROR		= 50;

System.Log.COLOR_DEFAULT	= "#FFFFFF";
System.Log.COLOR_DEBUG		= "#00FFFF";
System.Log.COLOR_INFO		= "#3300FF";
System.Log.COLOR_WARNING	= "#FFCC00";
System.Log.COLOR_ERROR		= "#FF0000";

System.Log.HTML_ID			= "framework-debug";
System.Log.ALERT_PREFIX		= "### LOG ### ";
System.Log.BUFFER_SIZE		= 50;

System.Log.Buffer			= new Array();
System.Log.BufferString		= STRING.EMPTY;
System.Log.ActiveMode		= System.Log.MODE_DEVELOPMENT;
System.Log.ActiveLevel		= System.Log.LEVEL_WARNING;


System.Log.setMode = function(mode){
	var debugHtml = System.Cache.getHtml(System.Log.HTML_ID);
	
	switch (mode){
		case System.Log.MODE_DEBUGGING:
			debugHtml.style.display = STRING.CSS_DISPLAY_BLOCK;
			break;
		default:
			debugHtml.style.display = STRING.CSS_DISPLAY_NONE;
			break;
	}
};

System.Log.setLevel = function(level){
	System.Log.ActiveLevel = level;
};

System.Log.verbose = function(message){
	System.Log.log(message, System.Log.LEVEL_VERBOSE, System.Log.COLOR_DEFAULT);
};

System.Log.debug = function(message){
	System.Log.log(message, System.Log.LEVEL_DEBUG, System.Log.COLOR_DEBUG);
};

System.Log.info = function(message){
	System.Log.log(message, System.Log.LEVEL_INFO, System.Log.COLOR_INFO);
};

System.Log.warning = function(message){
	System.Log.log(message, System.Log.LEVEL_WARNING, System.Log.COLOR_WARNING);
};

System.Log.error = function(message){
	System.Log.log(message, System.Log.LEVEL_ERROR, System.Log.COLOR_ERROR);
};

System.Log.log = function(message, level, color){
	if (!level)	level	= System.Log.LEVEL_VERBOSE;
	if (!color) color 	= System.Log.COLOR_DEFAULT;
	
	if (System.Log.ActiveMode !== System.Log.MODE_PRODUCTION && level >= System.Log.ActiveLevel){		
		alert(System.Log.ALERT_PREFIX + message);		
		System.Log.Buffer.push("<span style=\"color:" + color + "\">" + message + "</span>");
		
		while (System.Log.Buffer.length > System.Log.BUFFER_SIZE){
			System.Log.Buffer.splice(0, 1);
		}
		
		if (System.Log.ActiveMode === System.Log.MODE_DEBUGGING){
			System.Log.BufferString	= System.Log.Buffer.join("<br />");			
			System.putInnerHtml(System.Log.HTML_ID, System.Log.BufferString);	
		}				
	}	
};