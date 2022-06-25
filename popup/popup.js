let toggleButton = document.querySelector("#toggle")

toggleButton.addEventListener("click", () => {
  chrome.storage.sync.get("color", () => {
    toggleButton.style.backgroundColor = '#3aa757'
  })
})
