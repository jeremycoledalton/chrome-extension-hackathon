console.log("background.js")

chrome.scripting
    .executeScript({
      target : {tabId : getTabId()},
      files : [ "popup.js" ],
    })
    .then(() => console.log("injected popup.js script file"));