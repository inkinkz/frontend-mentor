const form = document.getElementById("register");
const emailInput = document.getElementById("email");

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    form.classList.add("invalid");
  } else {
    form.classList.remove("invalid");
    emailInput.value = "";
  }
});

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
