const $toggleSidebar = document.getElementById('mode-toggle');
const $toggleTopbar = document.getElementById('mode-toggle-cls');
const $icon = document.getElementById('mode-icon');
const $topbarIcon = document.getElementById('topbar-mode-icon');

const theme = sessionStorage.getItem("mode");
if (theme) {
    $icon.classList.replace('fa-sun', 'fa-moon');
    $topbarIcon.classList.replace('fa-sun', 'fa-moon');

}
else {
    $icon.classList.replace('fa-moon', 'fa-sun');
    $topbarIcon.classList.replace('fa-moon', 'fa-sun');

}

$toggleSidebar.addEventListener('click', () => {
    $icon.classList.contains('fa-moon') ? $icon.classList.replace('fa-moon', 'fa-sun') : $icon.classList.replace('fa-sun', 'fa-moon');
    $topbarIcon.classList.contains('fa-moon') ? $topbarIcon.classList.replace('fa-moon', 'fa-sun') : $topbarIcon.classList.replace('fa-sun', 'fa-moon');
})

$toggleTopbar.addEventListener('click', () => {
    Theme.flip();
    $icon.classList.contains('fa-moon') ? $icon.classList.replace('fa-moon', 'fa-sun') : $icon.classList.replace('fa-sun', 'fa-moon');
    $topbarIcon.classList.contains('fa-moon') ? $topbarIcon.classList.replace('fa-moon', 'fa-sun') : $topbarIcon.classList.replace('fa-sun', 'fa-moon');
})

// RoughNotation annotations for home page

document.addEventListener("DOMContentLoaded", function () {
  // Ensure RoughNotation library is available
  if (typeof RoughNotation === "undefined") {
    console.warn("RoughNotation library not loaded");
    return;
  }

  const about = document.querySelector("#rn-about");
  const contact = document.querySelector("#rn-contact");

  if (!about && !contact) return;

  const annAbout = RoughNotation.annotate(about, {
    type: "highlight",
    color: "#ccbaf7ff",
    animationDuration: 1200
  });

  const annContact = RoughNotation.annotate(contact, {
    type: "highlight",
    color: "#ceb3d8ff",
    animationDuration: 1200
  });

  setTimeout(()=> {
    annAbout.show();
    annContact.show();
  }, 600)
});

// Typed name for home page
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Typed !== 'function') return;

  new Typed('#typed-name', {
    strings: ['Krishna'],
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 1200,
    startDelay: 300,
    loop: false,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '_'
  });
});
