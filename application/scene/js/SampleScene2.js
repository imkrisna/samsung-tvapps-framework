function SampleScene2(){
	this.implements(BasicScene);
}

SampleScene2.prototype.handleKeyDown = function(keyCode){
	this.debug("handleKeyDown(" + keyCode + ")");
	
	switch (keyCode){
		case Samsung.TvKey.KEY_RETURN:
			System.preventClosing();
			UI.changeScene("SampleScene1");
			break;
	}
	
};