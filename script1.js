const correctPassword = "pastibisa";

function login() {
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("cardBox").style.display = "block";
  } else {
    alert("Password salah 😢");
  }
}

function flipCard() {
  const card = document.getElementById("card");
  card.classList.toggle("flip");

  document.getElementById("music").play();
}