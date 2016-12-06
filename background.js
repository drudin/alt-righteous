chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({clean_news_feed: true});
});

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.pageAction.show(tab.id);
    chrome.tabs.executeScript(null, {"file": "content.js"});
});
