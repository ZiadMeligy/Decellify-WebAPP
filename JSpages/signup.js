const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);
const form = document.getElementById("form");
const username = document.getElementById("username");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const age = document.getElementById("age");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const gender = document.getElementById("Gender");
const button_submit = document.getElementById("button_submit");

let UsersPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedUsers } = await _supabase
    .from("Users")
    .select("Username");
  resolve(retrievedUsers);
});

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}



//show success message
// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
    return false;
  }
  return true;
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    }
    // } else {
    //   showSuccess(input);
    // }
  });
}



//Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, firstname, lastname, age, password, password2]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  //checkEmail(email);
  if (!checkPasswordMatch(password, password2)) {
    return;
  }
  let Userflag= false;
  
  UsersPromise.then((data) => {
    // console.log("entered", username.value);
    // console.log("database", data[10].Username);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].Username)
      if (username.value == data[i].Username) {
        console.log("ohm ygod");
        Userflag = true;
        break;
      }
    }

    if (Userflag) {
      alert('Username Already in use');
      return
    }

    async function insertPatient() {
      const { data: User } = await _supabase.from("Patients").insert({
        FirstName: firstname.value,
        LastName: lastname.value,
        Age: age.value,
        Gender: gender.value,
      });
      console.log("inserting patient");
    }
    async function insertUser() {
      const { data: User } = await _supabase.from("Users").insert({
        Username: username.value,
        Password: password.value,
      });
      console.log("inserting user");
    }
    insertPatient();
    insertUser();
    changeButtonText();
  
    form.reset();

  });

  
});

function changeButtonText() {
  const originalText = button_submit.textContent;

  button_submit.textContent = "Registered Successfully";

  setTimeout(() => {
    button_submit.textContent = originalText;
  }, 2000);
}
