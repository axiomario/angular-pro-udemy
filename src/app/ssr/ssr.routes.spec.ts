import { TestBed } from '@angular/core/testing';
import { routes } from './ssr.routes';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('SSRRoutes', () => {
    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideRouter(routes)]
        });

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
    });

    it('should navigate and redirect to About', async () => {
        await router.navigate(['about']);
        expect(location.path()).toBe('/about');
        await router.navigate(['hello']);
        expect(location.path()).toBe('/about');
    });

    it('should load the proper component', async () => {
        const aboutRoute = routes.find(route => route.path === 'about');
        expect(aboutRoute).toBeDefined();

        const aboutComponent = await aboutRoute!.loadComponent!() as any;
        expect(aboutComponent.default.name).toBe('AboutComponent');
    })
});