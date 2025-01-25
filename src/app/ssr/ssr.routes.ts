import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'about', loadComponent: () => import('@/ssr/pages/about/about.component') },
    { path: 'pricing', loadComponent: () => import('@/ssr/pages/pricing/pricing.component') },
    { path: 'pokemons/page/:page', loadComponent: () => import('@/ssr/pages/pokemons/pokemons.component') },
    { path: 'pokemons/:id', loadComponent: () => import('@/ssr/pages/pokemons/components/pokemon/pokemon.component') },
    { path: '**', redirectTo: 'about' }
];
