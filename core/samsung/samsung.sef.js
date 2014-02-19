/**
 * Samsung SEF Plugin Wrapper Namespace
 * @namespace Samsung.SEF
 * 
 * @author <a href="mailto:im.krisna@gmail.com">I Made Krisna Widhiastra</a>
 * @version 2014.17.02
 * 
 * */
Samsung.SEF = Samsung.SEF || new Object();

Samsung.SEF.TV			= null;
Samsung.SEF.Audio		= null;
Samsung.SEF.Player		= null;
Samsung.SEF.TVMW		= null;
Samsung.SEF.Video		= null;
Samsung.SEF.NNavi		= null;
Samsung.SEF.AppCommon	= null;
Samsung.SEF.Network		= null;
Samsung.SEF.Storage		= null;

/**
 * Load all SEF Plugin references
 * 
 * */
Samsung.SEF.loadAll = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadAll()");
	
	Samsung.SEF.loadTV();
	Samsung.SEF.loadAudio();
	Samsung.SEF.loadPlayer();
	Samsung.SEF.loadTVMW();
	Samsung.SEF.loadNNavi();
	Samsung.SEF.loadAppCommon();
	Samsung.SEF.loadNetwork();
	Samsung.SEF.loadStorage();
};

Samsung.SEF.loadTV = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadTV()");	
	
	if (Samsung.SEF.TV === null) Samsung.SEF.TV = System.Cache.getHtml("pluginObjectTV");
	
	if (!Samsung.SEF.TV) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF TV Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF TV Loaded");
};

Samsung.SEF.loadAudio = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadAudio()");
	
	if (Samsung.SEF.Audio === null) Samsung.SEF.Audio = System.Cache.getHtml("pluginObjectAudio");
	
	if (!Samsung.SEF.Audio) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF Audio Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF Audio Loaded");
};

Samsung.SEF.loadPlayer = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadPlayer()");
	
	if (Samsung.SEF.Player === null) Samsung.SEF.Player = System.Cache.getHtml("pluginObjectPlayer");
	
	if (!Samsung.SEF.Player) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF Player Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF Player Loaded");
};

Samsung.SEF.loadTVMW = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadTVMW()");
	
	if (Samsung.SEF.TVMW === null) Samsung.SEF.TVMW = System.Cache.getHtml("pluginObjectTVMW");
	
	if (!Samsung.SEF.TVMW) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF TVMW Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF TVMW Loaded");
};

Samsung.SEF.loadNNavi = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadNNavi()");
	
	if (Samsung.SEF.NNavi === null) Samsung.SEF.NNavi = System.Cache.getHtml("pluginObjectNNavi");
	
	if (!Samsung.SEF.NNavi) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF NNavi Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF NNavi Loaded");
};

Samsung.SEF.loadAppCommon = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadAppCommon()");
	
	if (Samsung.SEF.AppCommon === null) Samsung.SEF.AppCommon = System.Cache.getHtml("pluginObjectAppCommon");
	
	if (!Samsung.SEF.AppCommon) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF AppCommon Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF AppCommon Loaded");
};

Samsung.SEF.loadNetwork = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadNetwork()");
	
	if (Samsung.SEF.Network === null) Samsung.SEF.Network = System.Cache.getHtml("pluginObjectNetwork");
	
	if (!Samsung.SEF.Network) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF Network Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF Network Loaded");
};

Samsung.SEF.loadStorage = function(){
	System.Log.verbose("[core/samsung/samsung.sef.js] Samsung.SEF.loadStorage()");
	
	if (Samsung.SEF.Storage === null) Samsung.SEF.Storage = System.Cache.getHtml("pluginObjectStorage");
	
	if (!Samsung.SEF.Storage) System.Log.warning("[core/samsung/samsung.sef.js] Cannot Load Samsung SEF Storage Plugin");
	else System.Log.info("[core/samsung/samsung.sef.js] Samsung SEF Storage Loaded");
};