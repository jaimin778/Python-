const fields = document.querySelectorAll("input");
const PasswordPattern = (val) => {
  let regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (!regularExpression.test(val)) {
    return true;
  }
  else return false
}
const PasswordCNF = (val) => {
  let field1 = document.regform.password;
  if (field1.value != val) {
    return true
  }
  return false
}
const EmailPattern = (val) => {
    let regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regularExpression.test(val)) {
      return true;
    }
    else return false
  }
  const EmailCNF = (val) => {
    let field1 = document.regform.email;
    if (field1.value != val) {
      return true
    }
    return false
  }
const validData = (ele) => {
  let errSpan = ele.nextElementSibling;
  console.log(ele);
  if (ele.value == "") {
    errSpan.style.display = "block";
    return false
  }
  else if(ele.type == "email" && ele.name == "email" && EmailPattern(ele.value)){
    errSpan.style.display = "block";
    return false
  }
  else if (ele.type == "password" && ele.name == "password" && PasswordPattern(ele.value)) {
    if(ele.type == "password" && ele.name == "password" && PasswordPattern(ele.value)){
        let passeror = document.getElementById("passerr")
        errSpan.style.display = "block";
        return false
    }
    else{
        errSpan.style.display = "block";
        return false
    }
    

  }
  else if (ele.name == "repwd" && PasswordCNF(ele.value)) {
    errSpan.style.display = "block";
    return false
  }
  else if (ele.name == "gender") {
    let gen = document.querySelectorAll("input[type=radio]")
    if (!(gen[0].checked || gen[1].checked)) {
      let error = document.getElementById("gender")
      error.style.display = "block"
      return false
    }
    return true
  }
  else {
    errSpan.style.display = "none";
    return true;
  }
}
fields.forEach((ele) => {
  ele.addEventListener('blur', (event) => {
    validData(event.target);
  });
});
const validateForm = (e) => {
  let result = []
  for (var i = 0; i < fields.length - 1; i++) {
    result.push(validData(fields[i]))
  }
  for (var i = 0; i < result.length - 1; i++) {
    console.log(result);
    if (!result[i]) {
      return false
    }
  }
  return true
}