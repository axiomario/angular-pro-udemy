import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterLink, TranslateModule],
  selector: 'products',
  templateUrl: 'products.component.html'
})

export default class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
