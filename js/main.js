const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const hiddenMenu = document.getElementById('hiddenMenu');


toggleMenuBtn.addEventListener('click', () => {
  hiddenMenu.classList.toggle('active');
});