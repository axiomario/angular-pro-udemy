import { Component, input, OnInit } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'issues-labels',
  templateUrl: 'issues-labels.component.html'
})

export class IssuesLabelsComponent implements OnInit {
  public labels = input.required<GitHubLabel[]>();

  constructor(private _issuesService: IssuesService) { }

  ngOnInit() { }

  public onClickLabel(label: GitHubLabel): void {
    this._issuesService.toggleLabel(label.name);
  }

  public isSelected(label: GitHubLabel): boolean {
    return this._issuesService.selectedLabels().has(label.name);
  }
}
