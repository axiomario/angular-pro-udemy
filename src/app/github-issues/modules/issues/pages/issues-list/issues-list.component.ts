import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { IssuesLabelsComponent } from "../../components/issues-labels/issues-labels.component";
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IssuesLabelsComponent,
    IssueItemComponent
],
  selector: 'issues-list',
  templateUrl: 'issues-list.component.html'
})

export default class IssuesListComponent implements OnInit {
  constructor(private _issuesService: IssuesService) { }

  ngOnInit() { }

  public get labelsQuery() {
    return this._issuesService.labelsQuery;
  }

  public get issuesQuery() {
    return this._issuesService.issuesQuery;
  }
}
