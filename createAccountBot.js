// createAccountBot.js

function function generateRealisticUsername() {
  const names = [
    "Kyle", "Emma", "Ava", "Liam", "Mia", "Noah", "Sophia",
    "Lucas", "Olivia", "Ethan", "Isabella", "Logan", "Amelia",
    "James", "Emily", "Benjamin", "Harper", "Daniel", "Ella"
  ];
  const randomNum = Math.floor(Math.random() * 100);
  return `${names[Math.floor(Math.random() * names.length)]}${randomNum}`;
}
 {
  const adjectives = ["Shadow", "Ghost", "Dark", "Mystic", "Cursed", "Silent"];
  const nouns = ["Slayer", "Wanderer", "Mage", "Phantom", "Hunter", "Legend"];
  const num = Math.floor(Math.random() * 1000);
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}${num}`;
}

function generatePassword() {
  return Math.random().toString(36).slice(-10);
}

function const username = generateRealisticUsername();
 {
  const username = generateRandomUsername();
  const password = generatePassword();

  const selectedHacks = (window.hackList || []).filter(h => h.enabled).map(h => h.id);

  // Simulate account creation & hack injection
  console.log("[+] Creating account with hacks:", selectedHacks);
  injectNewPlayer(username, password);
  if (typeof applyHacks === 'function') applyHacks();

  showCredentials(username, password);
  return { username, password, hacksApplied: selectedHacks };
}

function injectNewPlayer(user, pass) {
  console.log(`[*] Injecting user: ${user}, pass: ${pass}`);
  // fake or spoof user creation in game backend (sandbox only)
  // Prodigy client must skip signup animation and set user object manually
}

function showCredentials(user, pass) {
  const output = document.getElementById("account-output");
  if (output) {
    output.innerHTML = `<strong>Username:</strong> ${user}<br><strong>Password:</strong> ${pass}`;
  } else {
    alert(`Account Created!\nUsername: ${user}\nPassword: ${pass}`);
  }
}

// To be triggered by UI button
// createHackedAccount();
