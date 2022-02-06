const btnInstall = document.getElementById('buttonInstall');


// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;
    // Remove the hidden class from the button.
    btnInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `btnInstall` element
btnInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    btnInstall.classList.toggle('hidden', true);
});

// Add event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
     // Clear prompt
  window.deferredPrompt = null;
});