import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ButtonComponent } from './components/button.component';
import { CalculatorService } from './services/calculator.service';

interface CalculatorButton {
    label: string;
    isCommand?: boolean;
    isDouble?: boolean;
}

@Component({
    selector: 'calculator',
    standalone: true,
    templateUrl: 'calculator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent]
})
export default class CalculatorComponent implements OnInit {
    public buttons: CalculatorButton[] = [
        { label: 'C' },
        { label: '+/-' },
        { label: '%' },
        { label: '÷', isCommand: true },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: 'x', isCommand: true },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '-', isCommand: true },
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '+', isCommand: true },
        { label: '0' },
        { label: '.' },
        { label: '=', isCommand: true, isDouble: true }
    ];
    private calculatorService = inject(CalculatorService);
    public result = computed(() => this.calculatorService.result());
    public subresult = computed(() => this.calculatorService.subresult());
    public operator = computed(() => this.calculatorService.operator());
    
    constructor() { }

    ngOnInit() { }

    public handleClick(value: string) {
        this.calculatorService.processValue(value);
    }
}