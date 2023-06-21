
chrome.storage.local.get("isEnabled", async function (data) {
  if (data.isEnabled) {
    chrome.runtime.sendMessage({enableLectureMode: true});
  } 
});
