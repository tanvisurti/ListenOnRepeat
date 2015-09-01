chrome.webNavigation.onCompleted.addListener(function (dosomething) {
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
		 var activeTab = arrayOfTabs[0];
		 var url = arrayOfTabs[0].url;
		 var id = arrayOfTabs[0].id;
		 if ((url.indexOf("youtube") > -1)) {
			chrome.pageAction.show(id);
			chrome.pageAction.onClicked.addListener(function (clicked) { 
				var newurl = url.replace("youtube", "listenonrepeat");
				chrome.tabs.update(id, {url: newurl});
			});
		 }
	  }); 
 });

