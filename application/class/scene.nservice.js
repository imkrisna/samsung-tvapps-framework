function NServiceScene(){
	
}

NServiceScene.prototype.onNServiceConnected = function(){
	
};

NServiceScene.prototype.onNServiceDisconnected = function(){
	
};

NServiceScene.prototype.onNServiceMessage = function(message){
	this.debug("NService Message: " + message);
};

NServiceScene.prototype.debug = function(message){
	System.Log.debug("[NServiceScene] " + message);
};