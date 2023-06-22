let activateBtn = document.getElementById("activate");
let header = document.querySelector("p");

updateButonView();

activateBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let target = { tabId: tab.id };

  chrome.storage.local.get("isExtensionEnabled", async function (data) {
    if (!data.isExtensionEnabled) {
      chrome.storage.local.set({ isExtensionEnabled: true });
      updateButonView();

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
    } else {
      chrome.storage.local.set({ isExtensionEnabled: false });
      updateButonView();

      chrome.scripting.executeScript(
        {
          files: ["./utils/enableLectureUtils.js"],
          target: target,
        },
        () => {
          chrome.scripting.executeScript({
            target: target,
            function: () => {
              removeBlurredPharagraphs(false);
            },
          });
        }
      );
    }
  });
});

document.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let target = { tabId: tab.id };

  chrome.storage.local.get("isExtensionEnabled", async function (data) {
    if (!data.isExtensionEnabled) {
      chrome.storage.local.set({ isExtensionEnabled: true });
      updateButonView();

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
    } else {
      chrome.storage.local.set({ isExtensionEnabled: false });
      updateButonView();

      chrome.scripting.executeScript(
        {
          files: ["./utils/enableLectureUtils.js"],
          target: target,
        },
        () => {
          chrome.scripting.executeScript({
            target: target,
            function: () => {
              removeBlurredPharagraphs(false);
            },
          });
        }
      );
    }
  });
});

// Add a message listener to receive messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "pageLoad") {
    // Perform your desired actions or logic here
    console.log("Extension script executed on page load");
  }
});

function updateButonView() {
  chrome.storage.local.get("isExtensionEnabled", async function (data) {
    if (data.isExtensionEnabled) {
      header.innerHTML = "Desea desactivar el modo lectura?";
      activateBtn.innerHTML = "Desactivar";
      activateBtn.classList.toggle("inactive", data.isExtensionEnabled);
    } else {
      header.innerHTML = "Desea activar el modo lectura?";
      activateBtn.innerHTML = "Activar";
      activateBtn.classList.toggle("inactive", data.isExtensionEnabled);
    }
  });
}
