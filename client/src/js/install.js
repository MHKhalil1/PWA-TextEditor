const butInstall = document.getElementById('buttonInstall');
// Event handler for 'beforeinstallpromt'
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hiddle', false);
});
// Click event handler for 'butInstall'
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
     return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});
// Added handler for 'appinstalled'
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});