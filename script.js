// Définition des menus latéraux pour chaque option du menu horizontal
const sideMenus = {
    status: [
        { id: 'device-info', text: 'Device info' },
        { id: 'dsl', text: 'DSL' },
        { id: 'lan-info', text: 'Lan Info' },
        { id: 'voip', text: 'VoIP' },
        { id: 'statistics', text: 'Statistiques' },
        { id: 'system', text: 'Système' }
    ],
    config: [
        { id: 'network-config', text: 'Configuration réseau' },
        { id: 'wifi-config', text: 'Wi-Fi' },
        { id: 'security-config', text: 'Sécurité' },
        { id: 'backup-config', text: 'Sauvegarde' }
    ],
    advanced: [
        { id: 'admin-settings', text: 'Paramètres admin' },
        { id: 'network-advanced', text: 'Réseau avancé' },
        { id: 'system-tools', text: 'Outils système' },
        { id: 'diagnostics', text: 'Diagnostics' }
    ],
    service: [
        { id: 'voip-service', text: 'Service VoIP' },
        { id: 'iptv-service', text: 'Service IPTV' },
        { id: 'cloud-service', text: 'Service Cloud' }
    ],
    firewall: [
        { id: 'firewall-rules', text: 'Règles pare-feu' },
        { id: 'port-forwarding', text: 'Redirection de port' },
        { id: 'ip-filtering', text: 'Filtrage IP' }
    ],
    maintenance: [
        { id: 'firmware-update', text: 'Mise à jour firmware' },
        { id: 'system-reboot', text: 'Redémarrage' },
        { id: 'factory-reset', text: 'Réinitialisation' }
    ]
};

// Fonction pour changer le menu principal et mettre à jour le menu latéral
function changeMainMenu(menu) {
    // Mettre à jour le menu horizontal
    document.querySelectorAll('.top-menu-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Générer le menu latéral correspondant
    const sideNav = document.getElementById('sideNav');
    sideNav.innerHTML = '';

    sideMenus[menu].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'side-menu-item';
        menuItem.innerHTML = `<i>•</i> ${item.text}`;
        menuItem.onclick = function() {
            showSubContent(item.id, menu);
        };

        // Activer le premier élément par défaut
        if (sideMenus[menu].indexOf(item) === 0) {
            menuItem.classList.add('active');
            showSubContent(item.id, menu);
        }

        sideNav.appendChild(menuItem);
    });

    // Afficher le contenu principal correspondant
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${menu}-content`).classList.add('active');
}

// Fonction pour afficher le sous-contenu
function showSubContent(subId, mainMenu) {
    // Mettre à jour le menu latéral
    document.querySelectorAll('.side-menu-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Ici vous pourriez charger du contenu dynamique en fonction de mainMenu et subId
    const contentDiv = document.getElementById(`${mainMenu}-subcontent`);
    if (contentDiv) {
        contentDiv.innerHTML = `<p>Contenu pour ${mainMenu} > ${subId}</p>`;
    }
}

// Fonction pour afficher/masquer le menu utilisateur
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.classList.toggle('show');
}

// Fermer le menu utilisateur quand on clique ailleurs
document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('userMenu');
    const userMenuBtn = document.querySelector('.user-menu-btn');

    if (!userMenu.contains(event.target) && !userMenuBtn.contains(event.target)) {
        userMenu.classList.remove('show');
    }
});

// Initialiser le menu au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Activer le menu Statut par défaut
    changeMainMenu('status');
});