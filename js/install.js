let deferredInstallPrompt = null;
const installButton = document.getElementById('installButton');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Empêche le navigateur d'afficher automatiquement la bannière d'installation.
    deferredInstallPrompt = e;
    installButton.removeAttribute('hidden');
});

function installPWA() {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L\'utilisateur a accepté l\'installation de la PWA.');
                installButton.setAttribute('hidden', true);
            } else {
                console.log('L\'utilisateur a refusé l\'installation de la PWA.');
            }
            deferredInstallPrompt = null;
        });
    }
}

window.addEventListener('appinstalled', (evt) => {
    console.log('L\'application a été installée avec succès.', evt);
    installButton.setAttribute('hidden', true);
});