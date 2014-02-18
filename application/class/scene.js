function BasicScene(){
	
}

BasicScene.prototype.initialize = function(){
	this.debug("initialize()");
};

BasicScene.prototype.handleShow = function(data){
	this.debug("handleShow(" + data + ")");
};

BasicScene.prototype.handleFocus = function(){
	this.debug("handleFocus()");
};

BasicScene.prototype.handleHide = function(){
	this.debug("handleHide()");
};

BasicScene.prototype.handleKeyDown = function(keyCode){
	this.debug("handleKeyDown(" + keyCode + ")");
};

BasicScene.prototype.debug = function(message){
	System.Log.debug("[BasicScene] " + message);
};