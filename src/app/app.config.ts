// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { TelaClienteComponent } from './pages/tela-cliente/tela-cliente.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'cliente', component:  TelaClienteComponent},
  // { path: 'add-dish', component: DishFormComponent },
  // { path: 'edit-dish/:id', component: DishFormComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};
