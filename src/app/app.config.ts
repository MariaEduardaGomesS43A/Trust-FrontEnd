// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideNgxMask } from 'ngx-mask';


// import { DishListComponent } from './components/dish-list/dish-list.component';
// import { DishFormComponent } from './components/dish-form/dish-form.component';

// const routes: Routes = [
//   { path: '', component: DishListComponent },
//   { path: 'add-dish', component: DishFormComponent },
//   { path: 'edit-dish/:id', component: DishFormComponent },
// ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideNgxMask(),
  ]
};
