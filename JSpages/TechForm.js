const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);



const addTech= document.getElementById("submit-btn");
let form= document.querySelector("form");
let firstNameInput = document.getElementById("FirstName");
let lastNameInput = document.getElementById("LastName");
let ageInput = document.getElementById("Age");
let genderSelect = document.getElementById("Gender");
let deviceInput = document.getElementById("Device");
let experienceInput= document.getElementById("Experience");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let age = ageInput.value;
  let gender = genderSelect.value;
  let device = deviceInput.value;
  let experience= experienceInput.value;

  console.log(firstName,lastName,age,gender,device,experience)

  async function insertTechnician(){
  const {data: Tech}= await _supabase
    .from('Tech')
    .insert({
      FirstName: firstName,
      LastName: lastName,
      Age: age,
      Gender: gender,
      Device: device,
      Experience: experience })

      console.log("Tech added")
      Redirect();
      form.reset();
    }
    
    insertTechnician()
    
    

});



function Redirect(){
  location.href='dash.html'
}