// Task states
let subscribeDone = false;
let likeDone = false;
let timerDone = false;

// Buttons
const subscribeBtn = document.querySelector(".subscribe-btn");
const likeBtn = document.querySelector(".like-btn");
const watchBtn = document.getElementById("watchBtn");
const finalBtn = document.getElementById("finalBtn");
const timerText = document.getElementById("timerText");

// Step 1: Subscribe
subscribeBtn.addEventListener("click", () => {
  subscribeDone = true;
  subscribeBtn.classList.add("locked");

  // Unlock Like button
  likeBtn.classList.remove("locked");
  likeBtn.classList.add("glow");
});

// Step 2: Like
likeBtn.addEventListener("click", () => {
  if (!subscribeDone) return;
  likeDone = true;
  likeBtn.classList.add("locked");
  likeBtn.classList.remove("glow");

  // Unlock Start Watching button
  watchBtn.classList.remove("locked");
  watchBtn.classList.add("glow");
});

// Step 3: Start Watching
watchBtn.addEventListener("click", () => {
  if (!likeDone) return;
  watchBtn.classList.add("locked");
  watchBtn.classList.remove("glow");

  startTimer(); // start countdown
});

// Timer function
function startTimer() {
  timerText.textContent = "⏳ Please Go and watch...";

  setTimeout(() => {
    let timeLeft = 120; // 2 minutes
    timerText.textContent = " 2:00";

    const countdown = setInterval(() => {
      timeLeft--;
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      timerText.textContent = `⏳ Counting down: ${mins}:${secs < 10 ? "0"+secs : secs}`;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        timerText.textContent = "✅ You have watched for 2 minutes!";
        timerDone = true;

        // Unlock Final button
        finalBtn.classList.remove("locked");
        finalBtn.classList.add("glow");
      }
    }, 1000);
  }, 30000); // 30-second delay
}

// Final button
function finalStep() {
  // Show message
  document.getElementById("finalMessage").textContent =
    "🎉 All tasks completed! Redirecting...";

  // Redirect to laststep.html after 1 second
  setTimeout(() => {
    window.location.href = "laststep.html";
  }, 1000);
}