import { Component, input, OnInit, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  public isAuthenticated = input(false);
  public onSignIn = output();
  public onSignOut = output();

  constructor() { }

  ngOnInit() { }
}
