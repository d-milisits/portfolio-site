// Function to toggle navbar.
function show() {
  // Toggle animtions for nav elements.
  document.getElementById('navbar').classList.toggle('active');
  let seconds = .35;
  var elements = document.getElementsByClassName('nav-option');
  // Iterate through existing nav elements, apply animation & increase animation delay by 150ms per iteration.
  for (var i in elements) {
    seconds += .15;
    elements[i].style.animationDelay = `${seconds}s`;
    elements[i].className +=' animate__animated animate__flipInX';
  }
}

// Function to toggle modal (used for email only).
function hideModal() {
  var modal = document.getElementsByClassName('modal')[0];
  modal.style.bottom = "-300px";
}
function showModal() {
  var modal = document.getElementsByClassName('modal')[0];
  modal.style.bottom = "20px";
  setTimeout(()=>{
    hideModal();
  }, 2500);
}

// Remove animated classname from image at certain width.
if (screen.width < 1000) {
  var image = document.getElementById('img');
  image.classList.remove('animate__animated animate__fadeIn');
  image.className = '';
  console.log('haha');
}