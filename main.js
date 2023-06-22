const input = document.querySelector(".input");
const button = document.querySelector(".email-button");
const error = document.querySelector(".error");
const thanks = document.querySelector(".thanks");

function validation(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

button.addEventListener("click", () => {
  const email = input.value;
  if (validation(email)) {
    input.value = "";
    thanks.textContent = "Thanks for subscribe!";
    setTimeout(function () {
      thanks.textContent = "";
    }, 3000);
  } else {
    error.textContent = "Check your email please!";
    setTimeout(function () {
      error.textContent = "";
    }, 3000);
  }
});
