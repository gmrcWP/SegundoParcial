import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ngsw-worker.js').then((registration) => {
      console.log('Service Worker registrado: ', registration);
    }).catch((error) => {
      console.error('Error en el registro del Service Worker: ', error);
    });
  });
}

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers
  ],
}).catch((error) => console.error('Error al inicializar la app: ', error));