Object.prototype.implements = function(someClass){
	for (var key in someClass.prototype){
		if (this.prototype[key] === STRING.JS_UNDEFINED){
			this.prototype[key] = someClass.prototype[key];
		}
	}
};