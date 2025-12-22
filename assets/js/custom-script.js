const $toggleTopbar = document.getElementById('mode-toggle-cls');
const $topbarIcon = document.getElementById('topbar-mode-icon');

const theme = sessionStorage.getItem("mode");
if (theme) {
  $topbarIcon.classList.replace('fa-sun', 'fa-moon');

}
else {
  $topbarIcon.classList.replace('fa-moon', 'fa-sun');

}

$toggleTopbar.addEventListener('click', () => {
  Theme.flip();
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
  if (!document.querySelector("#typed-name")) return;

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

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('copy-link');
  if (!btn) return;

  const icon = btn.querySelector('i');

  const originalTitle = btn.getAttribute('title');
  const successTitle = btn.dataset.titleSucceed;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      // Change icon to check
      icon.classList.replace('fa-copy', 'fa-check');
      icon.classList.replace('fa-regular', 'fa-solid');
      icon.style.color = '#22c55e';

      // Update tooltip
      btn.setAttribute('data-bs-original-title', successTitle);
      btn.setAttribute('title', successTitle);

      // Reset after 2s
      setTimeout(() => {
        icon.classList.replace('fa-check', 'fa-copy');
        icon.classList.replace('fa-solid', 'fa-regular');
        icon.style.color = '#06b6d4';

        btn.setAttribute('data-bs-original-title', originalTitle);
      }, 2000);

    } catch (err) {
      console.error('Copy failed', err);
    }
  });
});

