// Navbar buttons

const navButtons = document.getElementsByClassName("btn-nav");

for (let navButton of navButtons ){
     navButton.addEventListener('click', function() {
    console.log("btn-clicked");
  });
}