function SampleScene1(){
	this.implements(BasicScene);
}

SampleScene1.prototype.initialize = function(){
	this.debug("initialize()");
};

SampleScene1.prototype.handleShow = function(data){
	this.debug("handleShow(" + data + ")");
};

SampleScene1.prototype.handleFocus = function(){
	this.debug("handleFocus()");
};

SampleScene1.prototype.handleHide = function(){
	this.debug("handleHide()");
};

SampleScene1.prototype.handleKeyDown = function(keyCode){
	this.debug("handleKeyDown(" + keyCode + ")");
	
	switch (keyCode){
		case Samsung.TvKey.KEY_ENTER:
			UI.changeScene("SampleScene2");
			break;
	}
};

SampleScene1.prototype.debug = function(message){
	System.Log.debug("[SampleScene1] " + message);
};