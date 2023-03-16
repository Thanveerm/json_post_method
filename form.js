function validateForm() {
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  let isvalid = true;

  if (email == "") {
    alert("Please enter your email address");
    isvalid = false;
  }

  if (phone == "") {
    alert("Please enter your phone number");
    isvalid = false;
  }

  var phone_regex = /^\d{10}$/;
  if (!phone_regex.test(phone)) {
    alert("Please enter a valid phone number");
    isvalid = false;
  }

  var email_regex = /^\S+(@gmail)?\.com$/;
  if (!email_regex.test(email)) {
    alert("Please enter a valid Gmail address");
    isvalid = false;
  }

  return isvalid;
}

var submit = document.getElementById("btn");
submit.addEventListener("click", formSubmit);

function formSubmit() {
  if (validateForm()) {
    var formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("image", document.getElementById("image").files[0]);

    var xml = new XMLHttpRequest();
    xml.open("POST", "form.php", true);
    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        alert("Form submitted successfully!");
      }
    };
    xml.send(formData);
  }
}
