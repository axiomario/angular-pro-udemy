import { Routes } from '@angular/router';
import * as SSRRoutes from '@/ssr/ssr.routes';

export const routes: Routes = [
    { path: 'calculator', loadComponent: () => import('@/calculator/calculator.component') },
    { path: 'ssr', loadComponent: () => import('@/ssr/ssr.component'), children: SSRRoutes.routes },
];
