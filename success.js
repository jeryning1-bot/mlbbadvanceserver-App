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

  startTimer(); // start timer process
});

// Timer function
function startTimer() {
  timerText.textContent = "⏳ Please go and watch the video... (starting soon)";

  // First wait 30 seconds
  setTimeout(() => {
    timerText.textContent = "⏳ Please go and watch the video for 2 minutes...";

    const endTime = Date.now() + 2 * 60 * 1000; // 2 minutes from now

    function checkTimer() {
      if (Date.now() >= endTime) {
        timerText.textContent = "✅ You have watched for 2 minutes!";
        timerDone = true;

        // Unlock Final button
        finalBtn.classList.remove("locked");
        finalBtn.classList.add("glow");
      } else {
        requestAnimationFrame(checkTimer);
      }
    }

    checkTimer();
  }, 30000); // 30-second delay
}

// Final button
function finalStep() {
  document.getElementById("finalMessage").textContent =
    "🎉 All tasks completed! Redirecting...";

  // Redirect to laststep.html after 1 second
  setTimeout(() => {
    window.location.href = "laststep.html";
  }, 1000);
}