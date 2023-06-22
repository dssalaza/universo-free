const newEnabledState = false;

chrome.storage.local.set({ isExtensionEnabled: newEnabledState }, function () {
  console.log("Value is being set to... " + newEnabledState);
});

chrome.runtime.onMessage.addListener(async function (message) {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let target = { tabId: tab.id };

  if (message.enableLectureMode) {
    chrome.scripting.executeScript(
      {
        files: ["./utils/enableLectureUtils.js"],
        target: target,
      },
      () => {
        chrome.scripting.executeScript({
          target: target,
          function: () => {
            removePayWall();
          },
        });
      }
    );

    chrome.scripting.executeScript(
      {
        files: ["./utils/enableLectureUtils.js"],
        target: target,
      },
      () => {
        chrome.scripting.executeScript({
          target: target,
          function: () => {
            removeBlurredPharagraphs(true);
          },
        });
      }
    );
  }
});
