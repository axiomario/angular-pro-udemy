import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterLink, TranslateModule],
  selector: 'basic-plan',
  templateUrl: 'basic-plan.component.html'
})

export default class BasicPlanComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
