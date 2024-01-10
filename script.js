const email_input = document.querySelector(".mail");

// expression to check valid email address
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
email_input.addEventListener("change", function () {
  if (email_input.value.match(mailformat)) {
    console.log("valid email");
  } else {
    console.log("invalid email");
  }
});
