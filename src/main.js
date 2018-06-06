import './input.scss';

const menuModal = document.getElementById('menu-modal');
const menuBtn = document.getElementById("menu-button");
const searchModal = document.getElementById('search-modal');
const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const closeModal = document.getElementsByClassName("close-modal");
const mainContainer = document.getElementById('main-container');
const mainLogo = document.getElementById('logo-primary');

function hideMainBtnDisplay() {
  mainLogo.className = "logo-primary hide";
  menuBtn.className = "main-head-button hide";
  searchBtn.className = "main-head-button hide";
}

function showMainBtnDisplay() {
  mainLogo.className = "logo-primary";
  menuBtn.className = "main-head-button";
  searchBtn.className = "main-head-button";
}

// When the user clicks on the button, open the modal
menuBtn.onclick = function() {
  menuModal.style.display = "block";
  mainContainer.className = "main-container blur";
  menuBtn.className="main-head-button"
  hideMainBtnDisplay();
}
searchBtn.onclick = function() {
  searchModal.style.display = "block";
  mainContainer.className = "main-container blur";
  hideMainBtnDisplay();
}

// When the user clicks on <span> (x), close the modal
closeModal[0].onclick = function() {
  menuModal.style.display = "none";
  mainContainer.className = "main-container";
  showMainBtnDisplay();
}
closeModal[1].onclick = function() {
  searchModal.style.display = "none";
  searchInput.value = "";
  mainContainer.className = "main-container";
  showMainBtnDisplay();
}
