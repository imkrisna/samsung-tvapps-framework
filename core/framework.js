Object.prototype.implements = function(someClass){
	for (var key in someClass.prototype){
		if (this.prototype[key] === STRING.JS_UNDEFINED){
			this.prototype[key] = someClass.prototype[key];
		}
	}
};

var Framework = Framework || new Object();

Framework.LOADED_SCENE_LIST 	= [];
Framework.LOADED_SCRIPT_LIST	= [];
Framework.LOADED_CSS_LIST		= [];

Framework.loadListedScenes = function(){
	for (var i = 0; i < Framework.LOADED_SCENE_LIST.length; i++){
		Framework.loadScene(Framework.LOADED_SCENE_LIST[i]);
	}
};

Framework.loadScene = function(sceneName){
	
};

Framework.loadListedScripts = function(){
	for (var i = 0; i < Framework.LOADED_SCRIPT_LIST; i++){
		Framework.loadScript(Framework.LOADED_SCRIPT_LIST[i]);
	}
};

Framework.loadScript = function(path){
	
};

Framework.loadListedCSS = function(){
	for (var i = 0; i < Framework.LOADED_CSS_LIST; i++){
		Framework.loadCSS(Framework.LOADED_CSS_LIST[i]);
	}
};

Framework.loadCSS = function(path){
	
};
	
Framework.loadListedScenes();
Framework.loadListedScripts();
Framework.loadListedCSS();