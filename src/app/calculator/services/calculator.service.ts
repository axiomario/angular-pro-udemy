import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CalculatorService {
    public result = signal('0');
    public subresult = signal('');
    public operator = signal('');
    private numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    private operations = ['+', '-', 'x', '÷'];

    constructor() { }
    
    public processValue(value: string) {
        if (this.numbers.includes(value)) {
            if (this.result() === '0') {
                this.result.set(value);
            } else {
                this.result.update(result => result + value);
            }
        }

        if (this.operations.includes(value)) {
            this.operate();
            this.subresult.set(this.result());
            this.result.set('0');
            this.operator.set(value);
        }

        if (value === 'C') {
            if (this.result() === '0') {
                this.clearMemory();
            }
            this.result.set('0');
        }

        if (value === '.' && !this.result().includes(value)) {
            this.result.update(result => result + value);
        }

        if (value === '+/-') {
            this.result.update(result => `${ Number(result) * -1 }`);
        }

        if (value === '%') {
            this.result.update(result => `${ Number(result) / 100 }`);
        }

        if (value === '=') {
            this.operate();
            this.clearMemory();
        }
    }

    private operate(): void {
        if (this.subresult().length && this.operator().length) {
            switch (this.operator()) {
                case '+':
                    this.result.update(result => '' + (Number(this.subresult()) + Number(result)));
                    break;
                case '-':
                    this.result.update(result => '' + (Number(this.subresult()) - Number(result)));
                    break;
                case 'x':
                    this.result.update(result => '' + (Number(this.subresult()) * Number(result)));
                    break;
                case '÷':
                    this.result.update(result => '' + (Number(this.subresult()) / Number(result)));
                    break;
            }
        }
    }

    private clearMemory(): void {
        this.subresult.set('');
        this.operator.set('');
    }
}