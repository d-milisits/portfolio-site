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

// Function to copy email to clipboard.
function copyToClipboard(val){
  var dummy = document.createElement("input");
  // dummy.style.display = 'none';
  document.body.appendChild(dummy);

  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value=val;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function showModal() {
  // Displays modal
  var modal = document.getElementsByClassName('modal')[0];
  modal.style.bottom = "20px";
  copyToClipboard('daniel.milisits@outlook.com');
  // Hides modal
  setTimeout(()=>{
    hideModal();
  }, 2500);
}