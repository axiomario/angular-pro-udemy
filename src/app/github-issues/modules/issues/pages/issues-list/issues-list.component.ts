import { Component, computed, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { CommonModule } from '@angular/common';
import { IssuesLabelsComponent } from "../../components/issues-labels/issues-labels.component";
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { State } from '../../interfaces';

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
  public all = computed(() => this._issuesService.selectedState() === State.All);
  public open = computed(() => this._issuesService.selectedState() === State.Open);
  public closed = computed(() => this._issuesService.selectedState() === State.Closed);

  constructor(private _issuesService: IssuesService) { }

  ngOnInit() { }

  public get labelsQuery() {
    return this._issuesService.labelsQuery;
  }

  public get issuesQuery() {
    return this._issuesService.issuesQuery;
  }

  onChangeState(newState: string): void {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.Closed
    }[newState] ?? State.All;

    this._issuesService.showIssuesByState(state);
  }
}
