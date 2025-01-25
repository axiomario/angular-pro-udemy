import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  templateUrl: 'issue-item.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ]
})

export class IssueItemComponent implements OnInit {
  public issue = input.required<GitHubIssue>();

  constructor() { }

  ngOnInit() { }

  public get isOpen(): boolean {
    return this.issue().state === State.Open;
  }

  public get since(): string {
    return '';
  }
}
