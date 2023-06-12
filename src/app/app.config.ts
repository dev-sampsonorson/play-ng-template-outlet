import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GlobalService } from './global.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), GlobalService]
};
