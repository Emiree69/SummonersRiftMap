document.addEventListener('DOMContentLoaded', function () {
  const enterButton = document.getElementById('enter-button');
  const mapContainer = document.getElementById('mapContainer');
  const topnav = document.getElementById('topnav');

  enterButton.addEventListener('click', function () {
    //Hide the begin screen and show the home screen
    document.querySelector('.begin-screen').style.display = 'none';
    mapContainer.style.display = 'block';
    topnav.style.display = 'block';
  });
});

//Popup text
function openDiv(text1, text2, imageUrl) {
  // Get references to the elements
  let popupDiv = document.getElementById('popupDiv');
  let popupTitel = document.getElementById('popupTitel');
  let popupText = document.getElementById('popupText');
  let popupimg = document.getElementById("popupimg");

  // Set the text content based on the parameters
  popupTitel.textContent = text1;
  popupText.textContent = text2;
  popupimg.src = imageUrl;

  // Show the div
  popupDiv.style.display = 'block';
}

function closeDiv() {
  // Hide the div
  let popupDiv = document.getElementById('popupDiv');
  popupDiv.style.display = 'none';
}

// hamburger menu display
function hamburgerButton() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}