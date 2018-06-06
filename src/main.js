import './input.scss';
// import $ from 'jquery';
//
// $(document).ready(function() {
//
// });

const menuModal = document.getElementById('menu-modal');
const menuBtn = document.getElementById("menu-button");
const searchModal = document.getElementById('search-modal');
const searchBtn = document.getElementById('search-button');
const closeModal = document.getElementsByClassName("close-modal");
const mainContainer = document.getElementById('main-container');

// hideMainBtnDisplay() {
//   menuBtn.className = "main-head-button hide";
//   searchBtn.className = "main-head-button hide";
// }

// When the user clicks on the button, open the modal
menuBtn.onclick = function() {
  menuModal.style.display = "block";
  mainContainer.className = "blur";
  menuBtn.className="main-head-button"
}
searchBtn.onclick = function() {
  searchModal.style.display = "block";
  mainContainer.className = "blur";
}

// When the user clicks on <span> (x), close the modal
closeModal[0].onclick = function() {
  menuModal.style.display = "none";
  mainContainer.className = "";
}
closeModal[1].onclick = function() {
  searchModal.style.display = "none";
  mainContainer.className = "";

}
