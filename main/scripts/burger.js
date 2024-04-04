window.addEventListener('load', function() {
    var menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.remove('visible');
});

document.getElementById('burgerIcon').addEventListener('click', function() {
    var menuOverlay = document.getElementById('menuOverlay');

    var isMenuVisible = menuOverlay.classList.contains('visible');

    if (isMenuVisible) {
        menuOverlay.classList.remove('visible');
    } else {
        menuOverlay.classList.add('visible');
    }

});
