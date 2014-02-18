Object.prototype.implements = function(someClass){
	for (var key in someClass.prototype){
		if (this.prototype[key] === STRING.JS_UNDEFINED){
			this.prototype[key] = someClass.prototype[key];
		}
	}
};

var Framework = Framework || new Object();

Framework.APPLICATION_PATH		= "application/";
Framework.SCENES_PATH			= Framework.APPLICATION_PATH + "scenes/";
Framework.SCENE_HTML_PATH		= Framework.SCENES_PATH + "html/";
Framework.SCENE_CSS_PATH		= Framework.SCENES_PATH + "css/";
Framework.SCENE_SCRIPT_PATH		= Framework.SCENES_PATH + "js/";

Framework.LOADED_SCENE_LIST 	= [];
Framework.LOADED_SCRIPT_LIST	= [];
Framework.LOADED_CSS_LIST		= [];

Framework.loadListedScenes = function(){
	for (var i = 0; i < Framework.LOADED_SCENE_LIST.length; i++){
		Framework.loadScene(Framework.LOADED_SCENE_LIST[i]);
	}
};

Framework.loadScene = function(sceneName){
	var sceneHtml	= Framework.SCENE_HTML_PATH + sceneName + ".html";
	var sceneCSS	= Framework.SCENE_CSS_PATH + sceneName + ".css";
	var sceneScript	= Framework.SCENE_SCRIPT_PATH + sceneName + ".js";
	
	
	
	Framework.loadCSS(sceneCSS);
	Framework.loadScript(sceneScript);
};

Framework.loadListedScripts = function(){
	for (var i = 0; i < Framework.LOADED_SCRIPT_LIST; i++){
		Framework.loadScript(Framework.LOADED_SCRIPT_LIST[i]);
	}
};

Framework.loadScript = function(path){
	var newScript 	= document.createElement("script");
	newScript.type	= "text/javascript";
	newScript.src	= path;
	
	if (document.head) document.head.appendChild(newScript);
};

Framework.loadListedCSS = function(){
	for (var i = 0; i < Framework.LOADED_CSS_LIST; i++){
		Framework.loadCSS(Framework.LOADED_CSS_LIST[i]);
	}
};

Framework.loadCSS = function(path){
	var newStyle	= document.createElement("link");
	newStyle.rel	= "stylesheet";
	newStyle.type	= "text/css";
	newStyle.href	= path;
	
	if (document.head) document.head.appendChild(newStyle);
};
	
Framework.loadListedScenes();
Framework.loadListedScripts();
Framework.loadListedCSS();