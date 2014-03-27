/**
 * Application Loader for Samsung Smart TV Javascript application
 * @namespace Main
 * 
 * @author <a href="mailto:im.krisna@gmail.com">I Made Krisna Widhiastra</a>
 * @version 2014.17.02
 * 
 * */
var Main = null;

/**
 * @type Object
 * */
Main = new Object();


/**
 * Runtime delay (in miliseconds) from loading to executing framework, Required to provide time for resources
 * initializing themselves.
 * 
 * @type Number
 * @default 1000
 * 
 * @constant
 * 
 * */
Main.PREPARE_DELAY	= 1000;

/**
 * Javascript Timeout object to execute framework construction.
 * @type Object
 * */
Main.Runner 		= null;

/**
 * Callback function which is called after the index.html loaded
 * @description Preparing all required resources and executing the {@link Main.Runner} and load framework.
 * 
 * @event 
 * */
Main.onLoad = function(){
	document.getElementById("anchor").focus();
	System.ready();
	
	Main.Runner = setTimeout(function(){
		try{
			System.Log.setMode(System.Log.MODE_DEVELOPMENT);
			System.Log.setLevel(System.Log.LEVEL_DEBUG);
			
			Samsung.SEF.loadAll();			
			
			UI.showScene("SampleScene1");
			UI.focusScene("SampleScene1");
			
			System.Log.info("[main.js] Main.Runner Execution Complete!");
		}
		catch (error){
			System.Log.error("[main.js] Main.Runner Execution Exception: " + error.message);
		}
		
		clearTimeout(Main.Runner);
		Main.Runner = null;
	}, Main.PREPARE_DELAY);
};

/**
 * Callback function which is called on application closing
 * @description Clean-up all resources in this function to prevent memory leak.
 * 
 * @event
 * 
 * */
Main.onUnload = function(){
	
};

/**
 * Callback function which is called on user remocon input key pressed
 * @description Handling the generated keycode from event.keyCode
 * 
 * @event
 * */
Main.keyDown = function(){
	
};