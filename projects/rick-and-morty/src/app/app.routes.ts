import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'characters',
    title: 'Characters',
    loadComponent: () => import('./features/characters/characters.component'),
  },
  {
    path: 'episodes',
    title: 'Episodes',
    loadComponent: () => import('./features/episodes/episodes.component'),
  },
  {
    path: 'locations',
    title: 'Locations',
    loadComponent: () => import('./features/locations/location.component'),
  },
  {
    path: 'favorites',
    title: 'Favorites',
    loadComponent: () => import('./features/favorites/favorites.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./features/error-page/error-page.component'),
  },
];
