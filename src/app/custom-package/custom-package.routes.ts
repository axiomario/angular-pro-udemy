import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('@/custom-package/modules/admin/layouts/admin/admin.component'), children: [
      { path: '', loadComponent: () => import('@/custom-package/modules/admin/pages/summary/summary.component')},
      { path: 'projects', loadComponent: () => import('@/custom-package/modules/admin/pages/projects/projects.component')},
    ] },
    { path: '**', redirectTo: '' }
];
