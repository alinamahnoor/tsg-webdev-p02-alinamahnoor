// ==========================================================
// Bootstrap khud handle karta hai: mobile menu toggle,
// testimonials carousel, aur FAQ accordion — koi extra
// JS likhne ki zaroorat nahi in cheezon ke liye,
// data-bs-* attributes HTML mein already laga diye hain.
//
// Din 4 mein yahan add hoga: contact form validation.
// ==========================================================

document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================================================
   CONTACT FORM VALIDATION
   ========================================================== */
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formSuccess = document.getElementById("form-success");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function showError(input, errorEl, msg) {
  input.classList.add("is-invalid");
  errorEl.textContent = msg;
}

function clearError(input, errorEl) {
  input.classList.remove("is-invalid");
  errorEl.textContent = "";
}

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError, "Please enter your name.");
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, emailError, "Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, messageError, "Please write a short message.");
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, messageError, "Message should be at least 10 characters.");
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  if (isValid) {
    formSuccess.classList.add("show");
    form.reset();
    setTimeout(() => formSuccess.classList.remove("show"), 4000);
  } else {
    formSuccess.classList.remove("show");
  }
});