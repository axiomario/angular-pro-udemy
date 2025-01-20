import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'about', loadComponent: () => import('@/ssr/pages/about/about.component') },
    { path: 'pricing', loadComponent: () => import('@/ssr/pages/pricing/pricing.component') },
    { path: '**', redirectTo: 'about' }
];