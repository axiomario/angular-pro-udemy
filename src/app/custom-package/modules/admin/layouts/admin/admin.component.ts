import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";
import { MacmSideMenuComponent, TitleColor } from 'macm-side-menu';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    //SideMenuComponent
    MacmSideMenuComponent
],
  selector: 'admin',
  templateUrl: 'admin.component.html'
})

export default class AdminComponent implements OnInit {
  public isAuthenticated = signal(false);
  public TitleColor = TitleColor;
  constructor() { }

  ngOnInit() { }

  public onLogIn(): void {
    this.isAuthenticated.set(true);
  }

  public onLogOut(): void {
    this.isAuthenticated.set(false);
  }
}
