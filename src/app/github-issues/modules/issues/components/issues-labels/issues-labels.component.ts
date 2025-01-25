import { Component, input, OnInit } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'issues-labels',
  templateUrl: 'issues-labels.component.html'
})

export class IssuesLabelsComponent implements OnInit {
  public labels = input.required<GitHubLabel[]>();

  constructor() { }

  ngOnInit() { }
}
