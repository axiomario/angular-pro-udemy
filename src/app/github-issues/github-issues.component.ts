import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'github-issues',
  templateUrl: 'github-issues.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class GitHubIssuesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
