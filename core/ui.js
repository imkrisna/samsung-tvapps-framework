var UI = new Object();

UI.SCENE_PREFIX	= Framework.SCENE_PREFIX;
UI.focusedScene	= null;

UI.showScene = function(sceneName, data){
	var sceneObject = System.Cache.getScene(sceneName);
	if (sceneObject === null){
		Framework.loadScene(sceneName);
		
		sceneObject = eval("(new " + sceneName + "())");
		
		System.Cache.registerScene(sceneName, sceneObject);
		sceneObject.initialize();
	}
	
	var sceneWrapper = System.Cache.getHtml(UI.SCENE_PREFIX + sceneName);
	sceneWrapper.style.display = STRING.CSS_DISPLAY_BLOCK;
	sceneObject.handleShow(data);
};

UI.hideScene = function(sceneName){
	var sceneObject = System.Cache.getScene(sceneName);
	if (sceneObject !== null){
		var sceneWrapper = System.Cache.getHtml(UI.SCENE_PREFIX + sceneName);
		sceneWrapper.style.display = STRING.CSS_DISPLAY_NONE;
		sceneObject.handleHide();
	}
};

UI.focusScene = function(sceneName){
	var sceneObject = System.Cache.getScene(sceneName);
	if (sceneObject !== null){
		UI.focusedScene = sceneName;
		sceneObject.handleFocus();
	}
};

UI.changeScene = function(sceneName, data){
	UI.showScene(sceneName, data);
	if (UI.focusedScene !== null && UI.focusedScene !== sceneName) {
		UI.hideScene(UI.focusedScene);
	}
	UI.focusScene(sceneName);
};