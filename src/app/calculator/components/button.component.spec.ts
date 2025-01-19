import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [ButtonComponent],
    template: `
        <calculator-button>3</calculator-button>
    `
})
class HostComponent {}

describe('CalculatorButton', () => {
    let fixture: ComponentFixture<ButtonComponent>;
    let compiled: HTMLElement;
    let component: ButtonComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should apply col-span-2 when isDouble is true', () => {
        fixture.componentRef.setInput('isDouble', true);
        fixture.detectChanges();
        expect(compiled.classList.value.includes('col-span-2')).toBeTrue();
    });

    it('should emit onClick when button is pressed', () => {
        spyOn(component.onClick, 'emit');
        component.contentValue()!.nativeElement.innerText = '1';
        component.handleClick();
        expect(component.onClick.emit).toHaveBeenCalled();
    });

    it('should set isPressed to true and then false when button is pressed', (done) => {
        component.handleClick();
        expect(component.isPressed()).toBeTrue();
        setTimeout(() => {
            expect(component.isPressed()).toBeFalse();
            done();
        }, 101);
    });

    it('should display projected content', () => {
        const hostComponent = TestBed.createComponent(HostComponent);
        const textContent = hostComponent?.nativeElement?.querySelector('button')?.textContent;

        expect(hostComponent).toBeTruthy();
        expect(textContent).toBe('3');
    });
});