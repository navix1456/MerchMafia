// JavaScript to toggle the mobile menu visibility
document.getElementById('menu-icon').addEventListener('click', function() {
  const menu = document.querySelector('header nav ul');
  if (menu.style.display === 'flex') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'flex'; // Show the menu when clicked
  }
});
