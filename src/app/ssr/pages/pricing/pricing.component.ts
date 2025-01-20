import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'pricing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'pricing.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class PricingComponent implements OnInit, OnDestroy {
    private title = inject(Title);

    constructor() { }

    ngOnInit() {
        this.title.setTitle('Pricing');
    }

    ngOnDestroy(): void {
        this.title.setTitle('AngularProUdemy');
    }
}