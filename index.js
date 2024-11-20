//Deport this damn thing to a separate file, because it automatically opens the menu on mobile
function toggleMenu() {
    var menuItems = document.getElementById('sandwitchMenuItems');
    if (menuItems.style.display === 'flex') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'flex';
    }
}