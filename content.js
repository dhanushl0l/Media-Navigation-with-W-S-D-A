chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "mediaForward") {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
  }
});
