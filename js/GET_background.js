chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse) {
	console.log(msg,sender,sendResponse);
});

console.log('Ae Men!');