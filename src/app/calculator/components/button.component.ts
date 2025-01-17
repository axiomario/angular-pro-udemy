import { Component, ElementRef, input, OnInit, output, signal, viewChild } from '@angular/core';

@Component({
    selector: 'calculator-button',
    templateUrl: 'button.component.html',
    standalone: true,
    host: {
        class: 'border-r border-b border-indigo-400',
        '[class.col-span-1]': '!isDouble()',
        '[class.col-span-2]': 'isDouble()'
    },
    styles: `
        .is-command {
            @apply bg-indigo-700 bg-opacity-20;
        }

        .is-pressed {
            @apply bg-black bg-opacity-20;
        }
    `
})

export class ButtonComponent implements OnInit {
    public onClick = output<string>();
    public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
    public isCommand = input(false, {
        transform: (value: boolean | string | undefined) => typeof value === 'string' ? value === '' : value
    });
    public isDouble = input(false, {
        transform: (value: boolean | string | undefined) => typeof value === 'string' ? value === '' : value
    });
    public isPressed = signal(false); 

    constructor() { }

    ngOnInit() { }

    public handleClick(): void {
        const value = this.contentValue()?.nativeElement.innerText;

        if (value) {
            this.onClick.emit(value);
        }

        this.pressButton();
    }

    public pressButton(): void {
        this.isPressed.set(true);
        setTimeout(() => {
            this.isPressed.set(false);
        }, 100);
    }
}