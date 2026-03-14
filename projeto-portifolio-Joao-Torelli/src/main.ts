import { bootstrapApplication } from '@angular/platform-browser';
import { AppRaizComponente } from './app/app-raiz.componente';
import { appConfig } from './app/app.config';

bootstrapApplication(AppRaizComponente, appConfig)
  .catch(err => console.error(err));
