var tabLocation;

chrome.tabs.getSelected(null, function(tab) {
  //properties of tab object
  tabId = tab.id;
  tabUrl = tab.url;
  tabLocation = String(tabUrl);

  console.log(tabLocation);

  var showURL = document.createElement('p');
  showURL.innerHTML = tabUrl;
  //rest of the save functionsality.
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
	if (changeInfo.status === 'complete') {
		console.log("Or Here");
		getData();
	};
});