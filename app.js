// Function to toggle navbar.
function show() {
  // Toggle animtions for nav elements.
  document.getElementById('navbar').classList.toggle('active');
  var seconds = .35;
  const elements = document.getElementsByClassName('nav-option');
  // Iterate through existing nav elements, apply animation & increase animation delay by 150ms per iteration.
  for (var i in elements) {
    seconds += .105;
    elements[i].style.animationDelay = `${seconds}s`;
    elements[i].className +=' animate__animated animate__flipInX';
  }
}

// Function called below to remove ability to scroll.
function noScroll() {
  window.scrollTo(0, 0);
}

// Function to pop loading screen
function loadSite() {
  // Removes ability to scroll & pops loading screen after x seconds. Resumes ability to scroll once complete.
  window.addEventListener('scroll', noScroll);
  const loader = document.getElementById('container');
  const wait = document.getElementById('wait');
  const link = document.getElementById('link');
  // document.body.style.maxHeight = '100vh';
  setTimeout(()=>{
    wait.style.animationDelay = '0s';
    link.style.animationDelay = '0s';
    wait.style.animation = 'slideOut';
    wait.style.animationFillMode = 'both';
    wait.style.animationDuration = '.365s';
    link.style.animation = 'slideOut';
    link.style.animationFillMode = 'both';
    link.style.animationDuration = '.365s';
    setTimeout(()=>{
      loader.style.top = '-100vh';
      setTimeout(()=>{
        loader.style.display = 'none';
        window.removeEventListener('scroll', noScroll);
        // document.body.style.maxHeight = 'none';
      }, 650);
    }, 315);
  }, 1100);
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

// Functions used for project card animations. Takes in target==id.
function fadein(target) {
  let text = document.getElementById(target);
  let circle = document.getElementById(`${target}-circle`);
  text.style.animation = '.35s transitionIn .065s';
  text.style.animationFillMode = 'both';
}

function fadeout(target) {
  let text = document.getElementById(target);
  let circle = document.getElementById(`${target}-circle`);
  text.style.animation = '.085s transitionOut';
  text.style.animationFillMode = 'both';
}