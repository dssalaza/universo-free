function removePayWall() {
  //Remove nodes related to subscription and register
  document.querySelectorAll("#alternative-content").forEach((element) => {
    element.remove();
  });

  document.querySelectorAll("#modal_planes_register").forEach((element) => {
    element.remove();
  });

  //Remove blur of the pharagraphs
  document.querySelectorAll("p").forEach((element) => {
    element.removeAttribute("style");
  });

  window.alert("Paywall removed!");
}

function removeBlurredPharagraphs(isEnabled) {
    window.alert("removeBlurredPharagraphs...");

  if (isEnabled) {
    console.log("observing...");

    const blurredPharagraphs = document.querySelectorAll(".prose-text");

    observer = new MutationObserver(() => {
      document.querySelectorAll("p").forEach((element) => {
        element.removeAttribute("style");
      });
    });

    blurredPharagraphs.forEach(function (node) {
      observer.observe(node, {
        attributes: true,
      });
    });
  } else {
    console.log("Disconnecting observer...");
    observer.disconnect();
  }
}

