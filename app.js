let navbar = document.getElementById("navbar");
let hamMenu = document.getElementById("hamMenu");

// !Nav bar functionality
hamMenu.addEventListener("click", () => {
  navbar.classList.toggle("ShowHideNav");
  hamMenu.classList.toggle("fa-xmark");
});

let ListItem= document.querySelectorAll("li");

ListItem.forEach((Item)=>Item.addEventListener("click", ()=>{
  navbar.classList.toggle("ShowHideNav");
  hamMenu.classList.toggle("fa-xmark");

}))