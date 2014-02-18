var System = new Object();

System.SETTINGS_USE_CACHE	= true;

System.TYPE_UNDEFINED 		= "undefined";
System.TYPE_STRING			= "string";

System.putInnerHtml = function(html, value){
	if (System.TYPE_STRING === typeof html){
		var domElement = null;
		
		if (true === System.SETTINGS_USE_CACHE && System.Cache){
			domElement = System.Cache.getHtml(html);
		}
		else{
			domElement = document.getElementById(html);
		}
		
		Samsung.Widget.putInnerHtml(domElement, value);
	}
};

System.getWidgetId = function(){
	return curWidget.id;
};

System.ready = function(){
	Samsung.Widget.sendReadyEvent();
};