Object.prototype.implements = function(someClass){
	for (var key in someClass.prototype){
		if (this.prototype[key] === STRING.JS_UNDEFINED){
			this.prototype[key] = someClass.prototype[key];
		}
	}
};

var Framework = Framework || new Object();

Framework.SCENE_PREFIX			= "framework_scene_";
Framework.SCENE_PATH			= "application/scene/";
Framework.SCENE_HTML_PATH		= Framework.SCENE_PATH + "html/";
Framework.SCENE_CSS_PATH		= Framework.SCENE_PATH + "css/";
Framework.SCENE_JS_PATH			= Framework.SCENE_PATH + "js/";

Framework.LOADED_SCENE_LIST 	= [];
Framework.LOADED_SCRIPT_LIST	= [
	"core/string.js",
	"core/ui.js",
	
	"core/samsung/samsung.js",
	"core/samsung/samsung.sef.js",
	"core/samsung/samsung.io.js",
	"core/samsung/net/samsung.nservice.js",
	
	"core/system/system.js",
	"core/system/system.cache.js",
	"core/system/system.info.js",
	"core/system/system.log.js"
];
Framework.LOADED_CSS_LIST		= [
	"default720.css"
];

Framework.loadListedScenes = function(){
	for (var i = 0; i < Framework.LOADED_SCENE_LIST.length; i++){
		Framework.loadScene(Framework.LOADED_SCENE_LIST[i]);
	}
};

Framework.loadScene = function(sceneName){
	if (document.getElementById(Framework.SCENE_PREFIX + sceneName) !== null) return;
		
	Samsung.IO.FileDescriptor = Samsung.IO.File.openFile(Framework.SCENE_HTML_PATH + sceneName + ".html", Samsung.IO.FILE_MODE_READ);
	$("body").append("<div id='" + Framework.SCENE_PREFIX + sceneName + "' class='scene-container'>" + Samsung.IO.FileDescriptor.readAll() + "</div>");
	Samsung.IO.File.closeFile(Samsung.IO.FileDescriptor);
	
	Framework.loadCSS(Framework.SCENE_CSS_PATH + sceneName + ".css");
	Framework.loadScript(Framework.SCENE_JS_PATH + sceneName + ".js");
};

Framework.loadListedScripts = function(){
	for (var i = 0; i < Framework.LOADED_SCRIPT_LIST; i++){
		Framework.loadScript(Framework.LOADED_SCRIPT_LIST[i]);
	}
};

Framework.loadScript = function(path){
	$("head").append("<script type='text/javascript' src='" + path + "'></script>");
};

Framework.loadListedCSS = function(){
	for (var i = 0; i < Framework.LOADED_CSS_LIST; i++){
		Framework.loadCSS(Framework.LOADED_CSS_LIST[i]);
	}
};

Framework.loadCSS = function(path){
	$("head").append("<link rel='stylesheet' type='text/css' href='" + path + "' />");
};
	
Framework.loadListedScripts();
Framework.loadListedCSS();
Framework.loadListedScenes();