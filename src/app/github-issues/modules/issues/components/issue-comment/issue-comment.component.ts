import { Component, input, OnInit } from '@angular/core';
import { GitHubIssue } from '../../interfaces';

@Component({
    standalone: true,
    imports: [],
    selector: 'issue-comment',
    templateUrl: 'issue-comment.component.html'
})

export class IssueCommentComponent implements OnInit {
    public issue = input.required<GitHubIssue>()
    constructor() { }

    ngOnInit() { }
}