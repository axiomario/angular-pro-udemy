import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    IssueCommentComponent
  ],
  selector: 'issue',
  templateUrl: 'issue.component.html'
})

export default class IssueComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _issueService = inject(IssueService);
  public issueNumber = toSignal<string>(
    this._activatedRoute.paramMap.pipe(
      map(params => params.get('id') ?? ''),
      tap(id => this._issueService.setIssueId(id))
    )
  );
  public issueQuery = this._issueService.issueQuery;
  public issueCommentsQuery = this._issueService.issueCommentsQuery;

  constructor() { }

  ngOnInit() { }
}
