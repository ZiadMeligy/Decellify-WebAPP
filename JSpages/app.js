const element = document.getElementById("plugin");
const listItem_1 = document.getElementById("pluginlist_item");
const contact_us = document.getElementById("contact-us");
const listItem_2 = document.getElementById("contact");
const services_link = document.getElementById("services_link");
const listItem_3 = document.getElementById("services");
const product_link = document.getElementById("product_link");
const listItem_4 = document.getElementById("products");

listItem_1.addEventListener("click", (e) => {
  e.preventDefault();
  element.scrollIntoView({
    behavior: "smooth",
  });
});

listItem_2.addEventListener("click", (e) => {
  e.preventDefault();
  contact_us.scrollIntoView({
    behavior: "smooth",
  });
});

listItem_3.addEventListener("click", (e) => {
  e.preventDefault();
  services_link.scrollIntoView({
    behavior: "smooth",
  });
});

listItem_4.addEventListener("click", (e) => {
  e.preventDefault();
  product_link.scrollIntoView({
    behavior: "smooth",
  });
});





// const shrink_btn = document.querySelector(".shrink-btn");
// const search = document.querySelector(".search");
// const sidebar_links = document.querySelectorAll(".sidebar-links a");
// const active_tab = document.querySelector(".active-tab");
// const shortcuts = document.querySelector(".sidebar-links h4");
// const tooltip_elements = document.querySelectorAll(".tooltip-element");
// let activeIndex;
// shrink_btn.addEventListener("click", () => {
//   document.body.classList.toggle("shrink");
//   setTimeout(moveActiveTab, 400);
//   shrink_btn.classList.add("hovered");
//   setTimeout(() => {
//     shrink_btn.classList.remove("hovered");
//   }, 500);
// });
// search.addEventListener("click", () => {
//   document.body.classList.remove("shrink");
//   search.lastElementChild.focus();
// });
// function moveActiveTab() {
//   let topPosition = activeIndex * 58 + 2.5;
//   if (activeIndex > 3) {
//     topPosition += shortcuts.clientHeight;
//   }
//   active_tab.style.top = `${topPosition}px`;
// }
// function changeLink() {
//   sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
//   this.classList.add("active");
//   activeIndex = this.dataset.active;
//   moveActiveTab();
// }
// sidebar_links.forEach((link) => link.addEventListener("click", changeLink));
// function showTooltip() {
//   let tooltip = this.parentNode.lastElementChild;
//   let spans = tooltip.children;
//   let tooltipIndex = this.dataset.tooltip;
//   Array.from(spans).forEach((sp) => sp.classList.remove("show"));
//   spans[tooltipIndex].classList.add("show");
//   tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
// }
// tooltip_elements.forEach((elem) => {
//   elem.addEventListener("mouseover", showTooltip);
// });









    //   function creatingNavBar() {
    //     //for loop to loop over the sections and store them in the listitem variable
    //     for (const section of sections) {
    //       let listItem = document.createElement("li");
    //       //assigning the link and the name of the section
    //       listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    //       listItem.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         section.scrollIntoView({
    //           behavior: "smooth",
    //         });
    //       });
    //       fragment.appendChild(listItem);
    //     }

    //   navbar.appendChild(fragment);}






    const Loggedguy=document.getElementById('LoggedUsername')
    const loggedName= sessionStorage.getItem('usernameName')

    console.log(loggedName)
    Loggedguy.textContent="Hi " + loggedName
    Loggedguy.style='color: white'