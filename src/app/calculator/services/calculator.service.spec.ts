import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    let calculatorService: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        calculatorService = TestBed.inject(CalculatorService);
    });

    beforeAll(() => {});
    afterEach(() => {});
    afterAll(() => {});

    it('should be created', () => {
        expect(calculatorService).toBeTruthy();
    });

    it('should be created with default values', () => {
        expect(calculatorService.result()).toBe('0');
        expect(calculatorService.subresult()).toBe('');
        expect(calculatorService.operator()).toBe('');
    });

    it('should set result to "0" when C is pressed', () => {
        calculatorService.result.set('123');
        calculatorService.processValue('C');
        expect(calculatorService.result()).toBe('0');
        calculatorService.processValue('C');
        expect(calculatorService.subresult()).toBe('');
        expect(calculatorService.operator()).toBe('');
    });

    it('should update result with number input', () => {
        calculatorService.processValue('1');
        calculatorService.processValue('2');
        calculatorService.processValue('.');
        calculatorService.processValue('5');
        expect(calculatorService.result()).toBe('12.5');
    });

    it('should handle operators', () => {
        calculatorService.processValue('1');
        calculatorService.processValue('+');
        calculatorService.processValue('5');
        calculatorService.processValue('-');
        calculatorService.processValue('2');
        calculatorService.processValue('x');
        calculatorService.processValue('3');
        calculatorService.processValue('÷');
        calculatorService.processValue('6');
        calculatorService.processValue('=');
        calculatorService.processValue('+/-');
        expect(calculatorService.result()).toBe('-2');
        expect(calculatorService.subresult()).toBe('');
        expect(calculatorService.operator()).toBe('');
    });
});