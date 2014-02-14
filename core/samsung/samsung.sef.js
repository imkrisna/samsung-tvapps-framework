var Samsung = Samsung || new Object();
Samsung.SEF = new Object();

Samsung.SEF.TV			= null;
Samsung.SEF.Audio		= null;
Samsung.SEF.Player		= null;
Samsung.SEF.TVMW		= null;
Samsung.SEF.Video		= null;
Samsung.SEF.NNavi		= null;
Samsung.SEF.AppCommon	= null;
Samsung.SEF.Network		= null;
Samsung.SEF.Storage		= null;

Samsung.SEF.loadAll = function(){												  
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
	if (Samsung.SEF.TV === null) Samsung.SEF.TV = System.Cache.getHtml("pluginObjectTV");
};

Samsung.SEF.loadAudio = function(){
	if (Samsung.SEF.Audio === null) Samsung.SEF.Audio = System.Cache.getHtml("pluginObjectAudio");
};

Samsung.SEF.loadPlayer = function(){
	if (Samsung.SEF.Player === null) Samsung.SEF.Player = System.Cache.getHtml("pluginObjectPlayer");
};

Samsung.SEF.loadTVMW = function(){
	if (Samsung.SEF.TVMW === null) Samsung.SEF.TVMW = System.Cache.getHtml("pluginObjectTVMW");
};

Samsung.SEF.loadNNavi = function(){
	if (Samsung.SEF.NNavi === null) Samsung.SEF.NNavi = System.Cache.getHtml("pluginObjectNNavi");
};

Samsung.SEF.loadAppCommon = function(){
	if (Samsung.SEF.AppCommon === null) Samsung.SEF.AppCommon = System.Cache.getHtml("pluginObjectAppCommon");
};

Samsung.SEF.loadNetwork = function(){
	if (Samsung.SEF.Network === null) Samsung.SEF.Network = System.Cache.getHtml("pluginObjectNetwork");
};

Samsung.SEF.loadStorage = function(){
	if (Samsung.SEF.Storage === null) Samsung.SEF.Storage = System.Cache.getHtml("pluginObjectStorage");
};