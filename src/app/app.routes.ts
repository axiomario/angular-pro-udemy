import { Routes } from '@angular/router';
import * as SSRRoutes from '@/ssr/ssr.routes';
import * as GitHubIssues from '@/github-issues/github-issues.routes';

export const routes: Routes = [
    { path: 'calculator', loadComponent: () => import('@/calculator/calculator.component') },
    { path: 'ssr', loadComponent: () => import('@/ssr/ssr.component'), children: SSRRoutes.routes },
    { path: 'github-issues', loadComponent: () => import('@/github-issues/github-issues.component'), children: GitHubIssues.routes },
];
