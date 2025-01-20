import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: 'navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}