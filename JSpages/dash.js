const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);

const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

const patientbtn = document.getElementById("patient-btn");
const doctorsbtn = document.getElementById("doctors-btn");
const reservebtn = document.getElementById("reserve-btn");
const techbtn = document.getElementById("tech-btn");
const title_header = document.getElementById("title-header");

const thead = document.getElementById("btats");
thead.innerHTML = "";

///////////////////////////
///////////////////////////
//// Technicians
techbtn.addEventListener("click", (e) => {
  title_header.textContent = "TECHNICIANS";
  TechPromise.then((Technicians) => {
    const add_container = document.getElementById("add-container");
    add_container.innerHTML = `<a href="form.html" id="plus-button">
    <button id="mariam" class="add-btn"

    ">ADD</button></a>`;

    const plusbtn = document.getElementById("plus-button");
    const addbtn = document.getElementById("mariam");
    addbtn.textContent = "ADD TECH";

    plusbtn.href = "TechForm.html";
    const thead = document.getElementById("btats");
    thead.innerHTML = "";

    let heads = "<th>Technician ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Age</th>";
    heads += "<th>Gender</th>";
    heads += "<th>Experience(years)</th>";
    heads += "<th>Device</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    const columnNames = [
      "FirstName",
      "LastName",
      "Age",
      "Gender",
      "Experience",
      "Device",
    ];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    for (var i = 0; i < Technicians.length; i++) {
      let item = Technicians[i];
      let row = document.createElement("tr");

      let IDcell = document.createElement("td");
      IDcell.textContent = item.id;
      row.appendChild(IDcell);

      let firstnamecell = document.createElement("td");
      firstnamecell.textContent = item.FirstName;
      row.appendChild(firstnamecell);

      let lastnamecell = document.createElement("td");
      lastnamecell.textContent = item.LastName;
      row.appendChild(lastnamecell);

      let Agecell = document.createElement("td");
      Agecell.textContent = item.Age;
      row.appendChild(Agecell);

      let Gendercell = document.createElement("td");
      Gendercell.textContent = item.Gender;
      row.appendChild(Gendercell);

      let Datecell = document.createElement("td");
      Datecell.textContent = item.Experience;
      row.appendChild(Datecell);

      let Timecell = document.createElement("td");
      Timecell.textContent = item.Device;
      row.appendChild(Timecell);

      let ActionsCell = document.createElement("td");
      let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("id", "editButton_" + i);
      editButton.classList.add("edit-button");
      editButton.setAttribute(
        "onclick",
        `editRow(this,"Tech",${item.id},${JSON.stringify(columnNames)})`
      );
      ActionsCell.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Tech",${item.id})`);
      ActionsCell.appendChild(deleteButton);

      row.appendChild(ActionsCell);

      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";

      tablebody.appendChild(row);

      tablebody.style.blockSize = "40px";
    }
  });
});

///////////////////////////
///////////////////////////
//// RESERVATIONS
reservebtn.addEventListener("click", (e) => {
  title_header.textContent = "RESERVATIONS";
  ReservationPromise.then((Reservations) => {
    const add_container = document.getElementById("add-container");
    add_container.innerHTML = `<a href="form.html" id="plus-button">
    <button id="mariam" class="add-btn" 

    ">ADD</button></a>`;
    const plusbtn = document.getElementById("plus-button");
    const addbtn = document.getElementById("mariam");
    addbtn.textContent = "ADD RESERVE";

    plusbtn.href = "reserv_form.html";
    const thead = document.getElementById("btats");
    thead.innerHTML = "";

    let heads = "<th>Reservation ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Age</th>";
    heads += "<th>Gender</th>";
    heads += "<th>Date</th>";
    heads += "<th>Time</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    const columnNames = [
      "FirstName",
      "LastName",
      "Age",
      "Gender",
      "Date",
      "Time",
    ];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    for (var i = 0; i < Reservations.length; i++) {
      let item = Reservations[i];
      let row = document.createElement("tr");

      let IDcell = document.createElement("td");
      IDcell.textContent = item.id;
      row.appendChild(IDcell);

      let firstnamecell = document.createElement("td");
      firstnamecell.textContent = item.FirstName;
      row.appendChild(firstnamecell);

      let lastnamecell = document.createElement("td");
      lastnamecell.textContent = item.LastName;
      row.appendChild(lastnamecell);

      let Agecell = document.createElement("td");
      Agecell.textContent = item.Age;
      row.appendChild(Agecell);

      let Gendercell = document.createElement("td");
      Gendercell.textContent = item.Gender;
      row.appendChild(Gendercell);

      let Datecell = document.createElement("td");
      Datecell.textContent = item.Date;
      row.appendChild(Datecell);

      let Timecell = document.createElement("td");
      Timecell.textContent = item.Time;
      row.appendChild(Timecell);

      let ActionsCell = document.createElement("td");
      let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("id", "editButton_" + i);
      editButton.classList.add("edit-button");
      editButton.setAttribute(
        "onclick",
        `editRow(this,"Reservations",${item.id},${JSON.stringify(columnNames)})`
      );
      ActionsCell.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute(
        "onclick",
        `deleteRow(this,"Reservations",${item.id})`
      );
      ActionsCell.appendChild(deleteButton);

      row.appendChild(ActionsCell);

      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";

      tablebody.appendChild(row);

      tablebody.style.blockSize = "40px";
    }
  });
});

///////////////////////////
///////////////////////////
//// DOCTORS
doctorsbtn.addEventListener("click", (e) => {
  title_header.textContent = "DOCTORS";
  DoctorsPromise.then((Doctors) => {
    const add_container = document.getElementById("add-container");
    add_container.innerHTML = `<a href="form.html" id="plus-button">
    <button id="mariam" class="add-btn"

    ">ADD</button></a>`;
    const plusbtn = document.getElementById("plus-button");
    const addbtn = document.getElementById("mariam");
    addbtn.textContent = "ADD DOCTOR";

    plusbtn.href = "addDr.html";
    const thead = document.getElementById("btats");
    thead.innerHTML = "";
    let heads = "<th>Doctor ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Age</th>";
    heads += "<th>Gender</th>";
    heads += "<th>Shift Start</th>";
    heads += "<th>Shift End</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    const columnNames = [
      "FirstName",
      "LastName",
      "Age",
      "Gender",
      "ShiftStart",
      "ShiftEnd",
    ];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    for (var i = 0; i < Doctors.length; i++) {
      let item = Doctors[i];
      let row = document.createElement("tr");

      let IDcell = document.createElement("td");
      IDcell.textContent = item.id;
      row.appendChild(IDcell);

      let firstnamecell = document.createElement("td");
      firstnamecell.textContent = item.FirstName;
      row.appendChild(firstnamecell);

      let lastnamecell = document.createElement("td");
      lastnamecell.textContent = item.LastName;
      row.appendChild(lastnamecell);

      let Agecell = document.createElement("td");
      Agecell.textContent = item.Age;
      row.appendChild(Agecell);

      let Gendercell = document.createElement("td");
      Gendercell.textContent = item.Gender;
      row.appendChild(Gendercell);

      let ShiftSTcell = document.createElement("td");
      ShiftSTcell.textContent = item.ShiftStart;
      row.appendChild(ShiftSTcell);

      let ShiftENDcell = document.createElement("td");
      ShiftENDcell.textContent = item.ShiftEnd;
      row.appendChild(ShiftENDcell);

      let ActionsCell = document.createElement("td");
      let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("id", "editButton_" + i);
      editButton.classList.add("edit-button");
      editButton.setAttribute(
        "onclick",
        `editRow(this,"Doctors",${item.id},${JSON.stringify(columnNames)})`
      );
      ActionsCell.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute(
        "onclick",
        `deleteRow(this,"Doctors",${item.id})`
      );
      ActionsCell.appendChild(deleteButton);

      row.appendChild(ActionsCell);

      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";

      tablebody.appendChild(row);

      tablebody.style.blockSize = "40px";
    }
  });
});

///////////////////////////
///////////////////////////
// PATIENTS TABLE
patientbtn.addEventListener("click", (e) => {
  title_header.textContent = "PATIENTS";
  PatientsPromise.then((Patients) => {
    const add_container = document.getElementById("add-container");
    add_container.innerHTML = `<a href="form.html" id="plus-button">
    <button id="mariam" class="add-btn"

    ">ADD</button></a>`;

    const plusbtn = document.getElementById("plus-button");
    const addbtn = document.getElementById("mariam");
    addbtn.textContent = "ADD PATIENT";

    plusbtn.href = "PatientForm.html";
    const thead = document.getElementById("btats");
    thead.innerHTML = "";
    let heads = "<th>Patient ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Age</th>";
    heads += "<th>Gender</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    const columnNames = ["FirstName", "LastName", "Age", "Gender"];
    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    for (var i = 0; i < Patients.length; i++) {
      let item = Patients[i];
      let row = document.createElement("tr");

      let IDcell = document.createElement("td");
      IDcell.textContent = item.id;
      row.appendChild(IDcell);

      let firstnamecell = document.createElement("td");
      firstnamecell.textContent = item.FirstName;
      row.appendChild(firstnamecell);

      let lastnamecell = document.createElement("td");
      lastnamecell.textContent = item.LastName;
      row.appendChild(lastnamecell);

      let Agecell = document.createElement("td");
      Agecell.textContent = item.Age;
      row.appendChild(Agecell);

      let Gendercell = document.createElement("td");
      Gendercell.textContent = item.Gender;

      row.appendChild(Gendercell);

      let ActionsCell = document.createElement("td");
      let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.setAttribute("id", "editButton_" + i);
      editButton.classList.add("edit-button");
      editButton.setAttribute(
        "onclick",
        `editRow(this,"Patients",${item.id},${JSON.stringify(columnNames)})`
      );
      ActionsCell.appendChild(editButton);

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute(
        "onclick",
        `deleteRow(this,"Patients",${item.id})`
      );
      ActionsCell.appendChild(deleteButton);

      row.appendChild(ActionsCell);

      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";

      tablebody.appendChild(row);

      tablebody.style.blockSize = "40px";
    }
  });
});

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////PROMISES
//////////
////
//
// The use of promises fetches the data for us from the Database and its sent out in a promise that can be used
// by using .then((data)=>{}) afterwards ;)
let PatientsPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedPatients } = await _supabase
    .from("Patients")
    .select("*");
  resolve(retrievedPatients);
});

let DoctorsPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedDoctors } = await _supabase.from("Doctors").select("*");
  resolve(retrievedDoctors);
});

let ReservationPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedPatients } = await _supabase
    .from("Reservations")
    .select("*");
  resolve(retrievedPatients);
});

ReservationPromise.then((res) => {
  console.log(res);
});

let TechPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedPatients } = await _supabase.from("Tech").select("*");
  resolve(retrievedPatients);
});

function editRow(button, tableName, patientId, col_names) {
  // Access the parent row element
  let row = button.parentNode.parentNode;

  // Enable editing for each cell in the row
  for (let i = 1; i < row.cells.length - 1; i++) {
    let cell = row.cells[i];
    let cellText = cell.textContent;
    cell.innerHTML = `<input type="text" value="${cellText}">`;
  }

  // Change the Edit button to a Save button
  button.textContent = "Save";
  button.setAttribute(
    "onclick",
    `savePatient(this, "${tableName}", ${patientId}, ${JSON.stringify(
      col_names
    )})`
  );
}

function savePatient(button, tableName, id, col_names) {
  // Access the parent row element
  let row = button.parentNode.parentNode;

  // Extract the updated data from the input fields
  let updatedData = [];
  for (let i = 1; i < row.cells.length - 1; i++) {
    let cell = row.cells[i];
    let input = cell.querySelector("input");
    let cellText = input.value;
    updatedData.push(cellText);
    cell.textContent = cellText; // Update the cell content with the new value
  }

  let updatedarrobj = {};
  col_names.forEach((ele, i) => {
    updatedarrobj[ele] = updatedData[i];
  });
  console.log(col_names);
  console.log(updatedarrobj);
  console.log(id);
  console.log(tableName);
  // Change the Save button back to an Edit button
  button.textContent = "Edit";
  button.setAttribute(
    "onclick",
    `editRow(this, "${tableName}", ${id}, ${JSON.stringify(col_names)})`
  );

  async function EditinDB() {
    const { data, error } = await _supabase
      .from(tableName)
      .update(updatedarrobj)
      .eq("id", id);
  }

  EditinDB();
}
function deleteRow(button, tableName, Passedid) {
  async function deleteFromDB() {
    const { error } = await _supabase
      .from(tableName)
      .delete()
      .eq("id", Passedid);
  }
  deleteFromDB();
  console.log("Deleted Succefully");

  let row = button.parentNode.parentNode;
  row.remove();
}

///////// Admin names

const AdminUser = sessionStorage.getItem("Adminusername");
const AdminName2 = document.querySelector(".admin-info h3");

const AdminName = document.getElementById("showAdminUser");
AdminName.textContent = AdminUser;
AdminName2.textContent = AdminUser;










title_header.textContent = "PATIENTS";
PatientsPromise.then((Patients) => {
  const add_container = document.getElementById("add-container");
  add_container.innerHTML = `<a href="form.html" id="plus-button">
    <button id="mariam" class="add-btn"

    ">ADD</button></a>`;

  const plusbtn = document.getElementById("plus-button");
  const addbtn = document.getElementById("mariam");
  addbtn.textContent = "ADD PATIENT";

  plusbtn.href = "PatientForm.html";
  const thead = document.getElementById("btats");
  thead.innerHTML = "";
  let heads = "<th>Patient ID</th>";
  heads += "<th>First Name</th>";
  heads += "<th>Last Name</th>";
  heads += "<th>Age</th>";
  heads += "<th>Gender</th>";
  heads += "<th>Actions</th>";

  thead.innerHTML = heads;
  const columnNames = ["FirstName", "LastName", "Age", "Gender"];
  let tablebody = document
    .getElementById("dynamic-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML = "";

  for (var i = 0; i < Patients.length; i++) {
    let item = Patients[i];
    let row = document.createElement("tr");

    let IDcell = document.createElement("td");
    IDcell.textContent = item.id;
    row.appendChild(IDcell);

    let firstnamecell = document.createElement("td");
    firstnamecell.textContent = item.FirstName;
    row.appendChild(firstnamecell);

    let lastnamecell = document.createElement("td");
    lastnamecell.textContent = item.LastName;
    row.appendChild(lastnamecell);

    let Agecell = document.createElement("td");
    Agecell.textContent = item.Age;
    row.appendChild(Agecell);

    let Gendercell = document.createElement("td");
    Gendercell.textContent = item.Gender;

    row.appendChild(Gendercell);

    let ActionsCell = document.createElement("td");
    let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("id", "editButton_" + i);
    editButton.classList.add("edit-button");
    editButton.setAttribute(
      "onclick",
      `editRow(this,"Patients",${item.id},${JSON.stringify(columnNames)})`
    );
    ActionsCell.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteButton_" + i);
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute(
      "onclick",
      `deleteRow(this,"Patients",${item.id})`
    );
    ActionsCell.appendChild(deleteButton);

    row.appendChild(ActionsCell);

    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";

    tablebody.appendChild(row);

    tablebody.style.blockSize = "40px";
  }
});