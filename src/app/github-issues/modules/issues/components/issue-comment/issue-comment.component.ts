import { Component, input, OnInit } from '@angular/core';
import { GitHubIssue } from '../../interfaces';
import { MarkdownModule } from 'ngx-markdown';

@Component({
    standalone: true,
    imports: [MarkdownModule],
    selector: 'issue-comment',
    templateUrl: 'issue-comment.component.html'
})

export class IssueCommentComponent implements OnInit {
    public issue = input.required<GitHubIssue>()
    constructor() { }

    ngOnInit() { }
}
