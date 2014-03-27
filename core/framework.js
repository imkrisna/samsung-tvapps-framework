alert("[Framework Debug] Loading Framework...");

Object.prototype.implements = function(someClass){
	for (var key in someClass.prototype){
		if (typeof(this[key]) === STRING.JS_UNDEFINED){
			this[key] = someClass.prototype[key];
		}
	}
};

var Framework = Framework || new Object();

Framework.SCENE_PREFIX			= "framework_scene_";
Framework.SCENE_PATH			= "application/scene/";
Framework.SCENE_HTML_PATH		= Framework.SCENE_PATH + "html/";
Framework.SCENE_CSS_PATH		= Framework.SCENE_PATH + "css/";
Framework.SCENE_JS_PATH			= Framework.SCENE_PATH + "js/";

Framework.LOADED_SCENE_LIST 	= [
	"SampleScene1",
	"SampleScene2"
];
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
	"core/system/system.log.js",
	
	"application/class/scene.js"
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
	
	var sceneHtml = Samsung.IO.loadFile(Framework.SCENE_HTML_PATH + sceneName + ".html");
	$("body").append("<div id='" + Framework.SCENE_PREFIX + sceneName + "' class='scene-container' style='display:none'>" + sceneHtml + "</div>");
	
	Framework.loadCSS(Framework.SCENE_CSS_PATH + sceneName + ".css");
	Framework.loadScript(Framework.SCENE_JS_PATH + sceneName + ".js");
	
	alert("[Framework Debug] Scene Loaded: " + sceneName);
};

Framework.loadListedScripts = function(){
	for (var i = 0; i < Framework.LOADED_SCRIPT_LIST.length; i++){
		Framework.loadScript(Framework.LOADED_SCRIPT_LIST[i]);
	}
};

Framework.loadScript = function(path){
	$("head").append("<script type='text/javascript' src='" + path + "'></script>");
	
	alert("[Framework Debug] Script Loaded: " + path);
};

Framework.loadListedCSS = function(){
	for (var i = 0; i < Framework.LOADED_CSS_LIST.length; i++){
		Framework.loadCSS(Framework.LOADED_CSS_LIST[i]);
	}
};

Framework.loadCSS = function(path){
	$("head").append("<link rel='stylesheet' type='text/css' href='" + path + "' />");
	
	alert("[Framework Debug] CSS Loaded: " + path);
};
	
Framework.loadListedScripts();
Framework.loadListedCSS();
Framework.loadListedScenes();

alert("[Framework Debug] Framework Loaded!");