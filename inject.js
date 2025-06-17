window.addEventListener("load", () => {
  const bar = document.createElement("div");
  bar.id = "hack-bar";
  bar.innerHTML = `
    <h3>🧪 Abyssal Hack Bar</h3>
    <button onclick="skipTutorial()">Skip Tutorial</button>
    <button onclick="receiveAccount()">Receive Account</button>
  `;
  document.body.appendChild(bar);

  // Press `~` to toggle hack bar
  document.addEventListener("keydown", e => {
    if (e.key === "`") {
      bar.style.display = bar.style.display === "none" ? "block" : "none";
    }
  });
});

function skipTutorial() {
  const iframe = document.getElementById("fake-client");
  iframe.contentWindow.postMessage({ type: "SKIP_TUTORIAL" }, "*");
}

function receiveAccount() {
  fetch("/supabase/createUser.js")
    .then(res => res.json())
    .then(data => alert("Login:\n" + data.email + "\n" + data.password));
}
