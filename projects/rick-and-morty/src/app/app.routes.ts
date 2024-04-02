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
    title: 'episodes',
    loadComponent: () => import('./features/episodes/episodes.component'),
  },
  { path: '**', redirectTo: 'home' },
];
