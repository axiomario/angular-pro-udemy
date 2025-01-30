import { Routes } from '@angular/router';
import * as SSRRoutes from '@/ssr/ssr.routes';
import * as GitHubIssues from '@/github-issues/github-issues.routes';
import * as CustomPackage from '@/custom-package/custom-package.routes';
import * as Internationalization from '@/internationalization/internationalization.routes';

export const routes: Routes = [
    { path: 'calculator', loadComponent: () => import('@/calculator/calculator.component') },
    { path: 'ssr', loadComponent: () => import('@/ssr/ssr.component'), children: SSRRoutes.routes },
    { path: 'github-issues', loadComponent: () => import('@/github-issues/github-issues.component'), children: GitHubIssues.routes },
    { path: 'custom-package', loadComponent: () => import('@/custom-package/custom-package.component'), children: CustomPackage.routes },
    { path: 'internationalization', loadComponent: () => import('@/internationalization/internationalization.component'), children: Internationalization.routes },
    { path: '**', redirectTo: 'calculator' }
];
