document.addEventListener("keydown", function (event) {
    let command = null;
  
    switch (event.key) {
      case "w":
        command = "playPause";
        break;
      case "a":
        command = "rewind";
        break;
      case "d":
        command = "forward";
        break;
      case "w":
         command = "volumeUp";
          break;
      case "s":
          command = "volumeDown";
          break;
      default:
      return;
    }
  
    chrome.runtime.sendMessage({ command: command });
  });
  