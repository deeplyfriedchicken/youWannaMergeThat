chrome.storage.sync.get("color", ({ color }) => {
  // TODO, try 10 times if no mergeButton is found
  setTimeout(() => {
    const mergeButton = document.querySelector("button.btn-group-merge");
    mergeButton.style.backgroundColor = color;
    mergeButton.innerHTML = "u sure u wanna REGULAR merge that?";
  }, 500);
});
