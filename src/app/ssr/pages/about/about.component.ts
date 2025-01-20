import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class AboutComponent implements OnInit, OnDestroy {
    private title = inject(Title);
    private meta = inject(Meta);
    private platform = inject(PLATFORM_ID);

    constructor() { }

    ngOnInit() {
        console.log(this.platform);
        if (isPlatformBrowser(this.platform)) {
            console.log('this is browser');
        }
        this.title.setTitle("About");
        this.meta.updateTag({ name: 'description', content: 'This is my About Page' });
        this.meta.updateTag({ name: 'keywords', content: 'About,Angular,Pro' });
    }

    ngOnDestroy(): void {
        this.title.setTitle('AngularProUdemy');
    }
}