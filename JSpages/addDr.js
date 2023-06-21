const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);
const addDoctor = document.getElementById("submit-btn");
let form = document.querySelector("form");
let IdInput = document.getElementById("id");
let firstNameInput = document.getElementById("FirstName");
let lastNameInput = document.getElementById("LastName");
let ageInput = document.getElementById("Age");
let genderSelect = document.getElementById("Gender");
let startInput = document.getElementById("shift_start");
let endInput = document.getElementById("shift_end");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let id = IdInput.value;
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let age = ageInput.value;
  let gender = genderSelect.value;
  let shiftstart = startInput.value;
  let shiftend = endInput.value;

  







  async function insertDoctor(){
  const {data: Doctor}= await _supabase
    .from('Doctors')
    .insert({
      FirstName: firstName,
      LastName: lastName,
      Age: age,
      Gender: gender,
      ShiftStart: shiftstart,
      ShiftEnd: shiftend })

      console.log("Doctor Added")
      Redirect();
      addDr.reset();

    }

    insertDoctor()



});



function Redirect(){
  location.href='dash.html'
}