chrome.storage.local.get("isExtensionEnabled", async function (data) {
  if (data.isExtensionEnabled) {
    chrome.runtime.sendMessage({ enableLectureMode: true });
  }
});
