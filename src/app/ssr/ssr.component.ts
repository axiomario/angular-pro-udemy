import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'ssr',
    standalone: true,
    templateUrl: 'ssr.component.html',
    imports: [
        RouterModule,
        RouterOutlet,
        NavbarComponent
    ]
})

export default class SSRComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}