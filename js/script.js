// constant variable making by id

const myForm = document.querySelector("#myForm");
const email = document.querySelector("#email");
const errorMsg = document.querySelector("#errorMsg");
const errorMsg2 = document.querySelector("#errorMsg2");

var emailValue =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// addevent listener

myForm.addEventListener("submit", (e) => {
  myFormFunction(e);
});

// fuction call and making
const myFormFunction = (e) => {
  e.preventDefault();

  if (email.value.length === 0) {
    errorMsg.innerHTML = "Please enter your email address.";
    errorMsg2.innerHTML = "Please enter your email address.";
  } else if (!email.value.toLowerCase().match(emailValue)) {
    errorMsg.innerHTML = "Please enter a valid email address.";
    errorMsg2.innerHTML = "Please enter a valid email address.";
  } else {
    errorMsg.innerHTML = "";
    errorMsg2.innerHTML = "";

    emailjs
      .send("service_epwymzc", "template_mlckkhl", {
        from_email: email.value,
        email_id: email.value,
        message: "This is my email address.",
        from_name: "Email",
      })
      .then(alert("Successfully send your email."));

    email.value = "";
  }
};
