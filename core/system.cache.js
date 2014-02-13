var System = System || new Object();

System.Cache = new Object();

System.Cache.HtmlDOM = new Object();
System.Cache.Storage = new Object();

System.Cache.getHtml = function(htmlId){
	if (System.TYPE_UNDEFINED === System.Cache.HtmlDOM[htmlId]){
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