import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/issue.service';

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

  constructor(private _issueService: IssueService) { }

  ngOnInit() { }

  public get isOpen(): boolean {
    return this.issue().state === State.Open;
  }

  public get since(): string {
    return '';
  }

  public prefetchData(): void {
    //this._issueService.prefetchIssue(this.issue().number.toString());
    this._issueService.setIssueData(this.issue());
  }
}
