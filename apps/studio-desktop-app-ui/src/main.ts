import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app';
import { RootComponent } from './app/root.component';

bootstrapApplication(RootComponent, appConfig).catch((error) => console.error(error));
