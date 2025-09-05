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