import { ComponentFixture, TestBed } from "@angular/core/testing";
import CalculatorComponent from "./calculator.component";
import { ICalculatorService } from "./services/calculator.service.interface";
import { CalculatorService } from "./services/calculator.service";
import { By } from "@angular/platform-browser";

class MockCalculatorService implements ICalculatorService {
    public result = jasmine.createSpy('result').and.returnValue('100');
    public subresult = jasmine.createSpy('subresult').and.returnValue('50');
    public operator = jasmine.createSpy('operator').and.returnValue('+');
    public processValue = jasmine.createSpy('processValue');
}

describe('CalculatorComponent', () => {
    let fixture: ComponentFixture<CalculatorComponent>;
    let compiled: HTMLElement;
    let component: CalculatorComponent;
    let mockCalculatorService: MockCalculatorService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CalculatorComponent],
            providers: [
                {
                    provide: CalculatorService,
                    useClass: MockCalculatorService
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CalculatorComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;

        mockCalculatorService = TestBed.inject(CalculatorService) as unknown as MockCalculatorService;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct values', () => {
        fixture.detectChanges();
        /*const result = fixture.debugElement.query(By.css('#result'));
        const subresult = fixture.debugElement.query(By.css('#subresult'));*/
        const result = compiled.querySelector('#result');
        const subresult = compiled.querySelector('#subresult');
        
        /*expect(result?.nativeElement.textContent).toBe('100');
        expect(subresult?.nativeElement.textContent).toBe('50 +');*/
        expect(result?.textContent).toBe('100');
        expect(subresult?.textContent).toBe('50 +');
    });

    it('should have button components', () => {
        fixture.detectChanges();
        expect(component.calculatorButtons()).toBeTruthy();
        expect(component.calculatorButtons().length).toBe(19);
    });

    it('should handle keyboard events correctly', () => {
        const event = new KeyboardEvent('keyup', { key: '=' });
        
        fixture.detectChanges();
        document.dispatchEvent(event);
        expect(mockCalculatorService.processValue).toHaveBeenCalled();
        expect(mockCalculatorService.processValue).toHaveBeenCalledWith('=');
    });

    it('should change values correctly', () => {
        mockCalculatorService.result.and.returnValue('10');
        fixture.detectChanges();
        expect(compiled.querySelector('#result')?.textContent).toBe('10');
        expect(component.result()).toBe('10');
    });
});