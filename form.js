function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var image = document.forms["myForm"]["image"].value;
  if (email == "") {
      alert("Please enter your email address");
      return false;
  }
  if (phone == "") {
      alert("Please enter your phone number");
      return false;
  }
  var phone_regex = /^\d{10}$/;
  if (!phone_regex.test(phone)) {
      alert("Please enter a valid phone number");
      return false;
  }
  var email_regex = /^\S+(@gmail)?\.com$/;
  if (!email_regex.test(email)) {
      alert("Please enter a valid Gmail address");
      return false;
  }
}
  var submit = document.getElementById('btn');
  submit.addEventListener('click', formSubmit);
  function formSubmit(){
       alert('Registration Successful');
        var formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('image', document.getElementById('image').value);

        var xml = new XMLHttpRequest();
        xml.open('POST', 'form.php', true);
        xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
                    
            }
        };
          xml.send(formData);
  }