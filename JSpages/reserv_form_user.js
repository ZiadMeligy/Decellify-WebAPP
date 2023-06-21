const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);

const addReservation = document.getElementById("submit-btn");
let form = document.querySelector("form");
// let reservationIdInput = document.getElementById("reservationID");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let genderSelect = document.getElementById("gender");
let dateInput = document.getElementById("date");
let timeInput = document.getElementById("time_reservation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // let reservationId = reservationIdInput.value;
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let age = ageInput.value;
  let gender = genderSelect.value;
  let date = dateInput.value;
  let time = timeInput.value;

  console.log(firstName, lastName, age, gender, date, time);

  //   Example: Create a reservation object
  //   let Reservations = {
  //     ReservationID: reservationId,
  //     FirstName: firstName,
  //     LastName: lastName,
  //     Age: age,
  //     Gender: gender,
  //     Date: date,
  //     Time : time
  //   };

  async function insertReserv() {
    const { data: Reservations } = await _supabase.from("Reservations").insert({
      FirstName: firstName,
      LastName: lastName,
      Age: age,
      Gender: gender,
      Date: date,
      Time: time,
    });

    console.log("Reservation Added");
    Redirect();
    form.reset();
  }

  insertReserv();
});

function Redirect() {
  location.href = "index-Logged.html";
}
