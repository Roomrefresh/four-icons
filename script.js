document.body.style.backgroundColor = "yellow";
function changeTextOnHover(element) {
  element.innerText = 'Call';
}
function resetText(element) {
  element.innerText = 'Request for Member';
}

var images = {
  "12345": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/.../image1.png",
  "67890": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/.../image2.jpg"
};

function openPasswordBox() {
  document.getElementById('passwordBox').style.display = 'block';
}
function closePasswordBox() {
  document.getElementById('passwordBox').style.display = 'none';
}
function checkPassword() {
  var enteredPassword = document.getElementById('passwordInput').value;
  if (images[enteredPassword]) {
    document.getElementById('popupImage').src = images[enteredPassword];
    document.getElementById('popup').style.display = 'flex';
    closePasswordBox();
  } else {
    alert("Incorrect Password!");
  }
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
const validIDs = ["har9039", "man9029", "amr8616", "nab0738", "shi2108", "bik3294", "kis5860", "san9484", "arj9509", "dhr7758", "pan9008"];
function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("idPopup").style.display = "block";
}
function checkID() {
  let enteredID = document.getElementById("idInput").value;
  if (validIDs.includes(enteredID)) {
    alert("✅ Access Granted! Redirecting to Google Meet...");
    window.location.href = "https://meet.google.com/pdq-kvrv-crj";
  } else {
    alert("❌ Sorry! Invalid ID Number.");
  }
}
