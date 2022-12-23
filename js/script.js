// constant variable making by id

const myForm = document.querySelector("#myForm");
const email = document.querySelector("#email");
const errorMsg = document.querySelector("#errorMsg");
const errorMsg2 = document.querySelector("#errorMsg2");
const emailValue =
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

    // sending msg and getting msg from input form.
    emailjs
      .send("service_epwymzc", "template_mlckkhl", {
        from_name: "Fylo",
        from_email: email.value,
        to_email: "ashraf.uzzaman04082004@gmail.com",
        form_name: email.value,
        from_reply_name: "Fylo",
        mention_who: "brother/sister",
        reply_msg: "Thank you so much for your response. How can I help you?",
        to_reply_email: email.value,
        form_reply_email: "ashraf.uzzaman04082004@gmail.com",
      })
      .then(alert("Successfuly send your email address."));

    email.value = "";
  }
};
