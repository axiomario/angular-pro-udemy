import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'products', loadComponent: () => import('@/internationalization/pages/products/products.component') },
    { path: 'basic-plan', loadComponent: () => import('@/internationalization/pages/basic-plan/basic-plan.component') },
    { path: '**', redirectTo: 'products' }
];
