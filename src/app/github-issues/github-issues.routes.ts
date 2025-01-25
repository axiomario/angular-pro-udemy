import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'issues', loadComponent: () => import('@/github-issues/modules/issues/pages/issues-list/issues-list.component') },
  { path: 'issue/:id', loadComponent: () => import('@/github-issues/modules/issues/pages/issue/issue.component') },
  { path: '**', redirectTo: 'issues' }
];
