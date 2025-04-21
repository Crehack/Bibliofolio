document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.side-navbar');
    const toggleBtn = document.createElement('button');
    const mainContent = document.querySelector('main');

    // Création du bouton unique
    toggleBtn.innerHTML = '&#9776;';
    toggleBtn.className = 'sidebar-toggle';
    document.querySelector('header .container').appendChild(toggleBtn);

    // Fonction de bascule
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        toggleBtn.innerHTML = sidebar.classList.contains('collapsed') ? '&#9776;' : '&times;';
        toggleBtn.style.left = sidebar.classList.contains('collapsed') ? '20px' : '260px';
    }

    // Événements
    toggleBtn.addEventListener('click', toggleSidebar);

    // Adaptation responsive
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('collapsed')) {
            toggleSidebar();
        }
    });
});