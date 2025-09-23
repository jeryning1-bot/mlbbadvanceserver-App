document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default submission

  const uid = document.getElementById("uid").value.trim();
  const email = document.getElementById("email").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const status = document.getElementById("status");

  // UID validation: only numbers
  if (!/^\d+$/.test(uid)) {
    status.textContent = "❌ UID must contain only numbers.";
    return;
  }

  // Email validation: Gmail only
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    status.textContent = "❌ Please enter a valid Gmail address.";
    return;
  }

  // Reason validation: at least 60 characters
  if (reason.length < 60) {
    status.textContent = "❌ Your reason must be at least 60 characters long.";
    return;
  }

  // All validations passed
  status.textContent = "✅ Submitting your application...";

  // Redirect to success page after short delay
  setTimeout(() => {
    window.location.href = "success.html";
  }, 1000);
});