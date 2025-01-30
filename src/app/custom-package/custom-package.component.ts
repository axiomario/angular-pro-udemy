import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'custom-package',
  templateUrl: 'custom-package.component.html'
})

export default class CustomPackageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
