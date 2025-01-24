import { ComponentFixture, TestBed } from "@angular/core/testing";
import SSRComponent from "./ssr.component";
import { provideRouter } from "@angular/router";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";

describe('SSRComponent', () => {
    let fixture: ComponentFixture<SSRComponent>;
    let compiled: HTMLElement;

    @Component({
        selector: 'navbar',
        standalone: true,
    })
    class NavbarComponentMock {}

    beforeEach(async () => {
        TestBed.overrideComponent(SSRComponent, {
            set: {
                imports: [NavbarComponentMock],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }
        });
        /*await TestBed.configureTestingModule({
            imports: [SSRComponent],
            providers: [provideRouter([])]
        }).overrideComponent(SSRComponent, {
            remove: {
                imports: [NavbarComponent]
            },
            add: {
                imports: [NavbarComponentMock]
            }
        }).compileComponents();*/

        fixture = TestBed.createComponent(SSRComponent);
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should create the component', () => {
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it('should render the navbar and router-outlet', () => {
        expect(compiled.querySelector('router-outlet')).not.toBeNull();
        expect(compiled.querySelector('navbar')).toBeTruthy();
    });
});