function cleanNewsFeed(){

    chrome.storage.sync.get("clean_news_feed", function(data){
        if (data["clean_news_feed"]){
            replaceIt();
            setInterval(replaceIt,999);
            
            }
    });
}

function replaceIt() {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text

                                    .replace(/alt-right/, 'white nationalists (though the publication you are reading opted not to use that term) ');

                if (replacedText !== text) {
                    node.textContent = replacedText;
                }
            }
        }
    }
}


cleanNewsFeed();