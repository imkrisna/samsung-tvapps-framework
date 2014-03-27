var System = System || new Object();

System.Cache = new Object();

System.Cache.Scene		= new Object();	
System.Cache.HtmlDOM 	= new Object();
System.Cache.Storage 	= new Object();

System.Cache.registerScene = function(sceneName, sceneObject){
	if (System.TYPE_UNDEFINED === System.Cache.Scene[sceneName]){
		System.Cache.Scene[sceneName] = sceneObject;
	}
};

System.Cache.getScene = function(sceneName){
	if (System.TYPE_UNDEFINED === System.Cache.Scene[sceneName]){
		return null;
	}
	else{
		return System.Cache.Scene[sceneName];
	}
};

System.Cache.getHtml = function(htmlId){
	if (System.TYPE_UNDEFINED === System.Cache.HtmlDOM[htmlId]){
		alert("[System.Cache] Caching HTML DOM: " + htmlId);
		System.Cache.HtmlDOM[htmlId] = document.getElementById(htmlId);
	}
	return System.Cache.HtmlDOM[htmlId];
};

System.Cache.setItem = function(key, value){
	System.Cache.Storage[key] = value;
};

System.Cache.getItem = function(key){
	if (System.TYPE_UNDEFINED === System.Cache.Storage[key]){
		return null;
	}
	else{
		return System.Cache.Storage[key];
	}
};