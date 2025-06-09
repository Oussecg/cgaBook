const pages = {


    status: `


      <div class="section">


        <div class="section-header">Système</div>


        <table>


          <tr><td class="label">Alias</td><td>DSL Router VN020-F3W(TT)</td></tr>


          <tr><td class="label">Durée d'activité</td><td>4j 21h 19m</td></tr>


          <tr><td class="label">Date / heure</td><td>Sam. Juin 8 12:58:34 2025</td></tr>


          <tr><td class="label">Firmware</td><td>V1.0.2_2021</td></tr>


          <tr><td class="label">Date Firmware</td><td>28 Oct 2021</td></tr>


          <tr><td class="label">Numéro de Série</td><td>31931003002699</td></tr>


        </table>


      </div>


      <div class="section">


        <div class="section-header">DSL</div>


        <table>


          <tr><td class="label">Modulation Active</td><td>ADSL2 AnnexA</td></tr>


          <tr><td class="label">Débit montant</td><td>891 kbps</td></tr>


          <tr><td class="label">Débit descendant</td><td>6696 kbps</td></tr>


          <tr><td class="label">Max montant</td><td>1065 kbps</td></tr>


          <tr><td class="label">Max descendant</td><td>9844 kbps</td></tr>


          <tr><td class="label">Temps Sync</td><td>2j 4:45:5</td></tr>


        </table>


      </div>


    `,


    config: '<h2>Configuration</h2><p>Paramètres de configuration à venir...</p>',


    advanced: '<h2>Avancé</h2><p>Options avancées en cours de développement...</p>',


    service: '<h2>Service</h2><p>Liste des services réseau...</p>',


    firewall: '<h2>Pare-Feu</h2><p>Règles de sécurité...</p>',


    maintenance: '<h2>Maintenance</h2><p>Outils de maintenance système...</p>'


};





document.querySelectorAll('.menu-btn').forEach(btn => {


    btn.addEventListener('click', () => {


        document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));


        btn.classList.add('active');


        const page = btn.getAttribute('data-page');


        document.getElementById('page-content').innerHTML = pages[page];


    });


});

window.addEventListener('load', handleMenu);
window.addEventListener('resize', handleMenu);

function handleMenu() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth < 700) {

        menu.innerHTML = "<img src='Black-Burger.png' alt='Humburger Menu' class='humburger-menu'>";
        const humburgerMenu = menu.querySelector('.humburger-menu');

        humburgerMenu.addEventListener('mouseover', () => {
            humburgerMenu.src = 'White-Burger.png';
        });

        humburgerMenu.addEventListener('mouseout', () => {
            humburgerMenu.src = 'Black-Burger.png';
        });
    } else {
        menu.innerHTML =
            `
            <div class= "menu-btn active" data-page="status">Statut</div>
            <div class="menu-btn" data-page="config">Configuration</div>
            <div class="menu-btn" data-page="advanced">Avancé</div>
            <div class="menu-btn" data-page="service">Service</div>
            <div class="menu-btn" data-page="firewall">Pare-Feu</div>
            <div class="menu-btn" data-page="maintenance">Maintenance</div>
            `;
    }
}