// src/serviceWorkerRegistration.ts

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration: ServiceWorkerRegistration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error: any) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
}
