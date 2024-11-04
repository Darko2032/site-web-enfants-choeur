document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const closeModal = document.querySelector(".close");
    const scheduleBoxes = document.querySelectorAll('.schedule-box');
    const modalContentList = document.querySelector('.modal-content ul');

    // Ajouter des événements de clic sur les cases horaires
    scheduleBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const serviceNames = this.getAttribute('data-service').split(', ');
            modal.style.display = "flex"; // Afficher la modale
            updateModalContent(serviceNames); // Mettre à jour le contenu de la modale
        });
    });

    // Fermer la modale quand on clique sur la croix
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Fermer la modale
    });

    // Fermer la modale si on clique en dehors de celle-ci
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Fermer la modale si on clique en dehors
        }
    });

    // Mettre à jour le contenu de la modale
    function updateModalContent(names) {
        modalContentList.innerHTML = ""; // Réinitialiser le contenu
        
        // Remplir avec les noms de service
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            modalContentList.appendChild(li);
        });
    }
});
