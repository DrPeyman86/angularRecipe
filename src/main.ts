//this is the first js page the web page hits once the page is loaded
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//this line actually starts the angular project by adding 
//AppModule component to the bootstrapModule method. AppModule is being imported
//from app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

