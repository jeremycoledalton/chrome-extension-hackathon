document.addEventListener('DOMContentLoaded', () => {
    
console.log('This is a popup!');

async function getCurrentTab() {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log ('tab: ' + tab);
    return tab;
  
  } 

async function grabTab() {
    let current = await getCurrentTab();
    console.log ('current: ' + current)
    return current;
}

// const textSummary = document.querySelector(".mw-content-ltr mw-parser-output")

// console.log ("This is Text Summary: " + textSummary)




const popup = document.querySelector('body');

const text = document.createElement('p');

text.innerText = textSummary;

popup.appendChild(text);



// grab the current summary text div
// change its contents to the value of "textSummary"

});


// chrome.scripting
//     .executeScript({
//       target : {tabId : getTabId()},
//       files : [ "background.js" ],
//     })
//     .then(() => console.log("injected background.js script file"));