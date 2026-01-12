import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((error) => console.error(error));
