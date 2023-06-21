const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);



const addPatient = document.getElementById("submit-btn");
let form = document.querySelector("form");
let firstNameInput = document.getElementById("FirstName");
let lastNameInput = document.getElementById("LastName");
let ageInput = document.getElementById("Age");
let genderSelect = document.getElementById("Gender");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let age = ageInput.value;
  let gender = genderSelect.value;

  let newpatient = {
    FirstName: firstName,
    LastName: lastName,
    Age: age,
    Gender: gender,
  };

  async function insertPatient(){
  const {data: Patient}= await _supabase
    .from('Patients')
    .insert(newpatient)

    console.log("Inserting Patient")
    Redirect();
    form.reset();
    }


    insertPatient()

    

    

});



function Redirect(){
  location.href='dash.html'
}


















// const addPatient = document.getElementById('submit-btn');
// let form = document.querySelector('form');
// let patientIdInput = document.getElementById('PatientID');
// let firstNameInput = document.getElementById('FirstName');
// let lastNameInput = document.getElementById('LastName');
// let ageInput = document.getElementById('Age');
// let genderSelect = document.getElementById('Gender');

// addPatient.addEventListener("click", (e)=>{
//   e.preventDefault();
//   let patientId = patientIdInput.value;
//   let firstName = firstNameInput.value;
//   let lastName = lastNameInput.value;
//   let age = ageInput.value;
//   let gender = genderSelect.value;

//   let newpatient = {
//     PatientID: patientId,
//     Firstname: firstName,
//     Lastname: lastName,
//     Age: age,
//     Gender: gender
//   }

//   Patients.push(newpatient)

//   console.log(Patients)

//   form.reset();

// })
