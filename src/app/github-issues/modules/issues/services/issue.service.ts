import { Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueById, getIssueComments } from '../actions';
import { GitHubIssue } from '../interfaces';

@Injectable({providedIn: 'root'})
export class IssueService {
    private issueId = signal<string|null>(null);

    public issueQuery = injectQuery(() => ({
        queryKey: ['issue', this.issueId()],
        queryFn: () => getIssueById(this.issueId()!),
        enabled: this.issueId() !== null
    }));

    public issueCommentsQuery = injectQuery(() => ({
        queryKey: ['issue', this.issueId(), 'comments'],
        queryFn: () => getIssueComments(this.issueId()!),
        enabled: this.issueId() !== null
    }));

    constructor(private _queryClient: QueryClient) { }

    setIssueId(issueId: string): void {
        this.issueId.set(issueId);
    }

    prefetchIssue(issueId: string): void {
        this._queryClient.prefetchQuery({
            queryKey: ['issue', issueId],
            queryFn: () => getIssueById(issueId),
            staleTime: 1000 * 60 * 5
        });
    }

    setIssueData(issue: GitHubIssue): void {
        this._queryClient.setQueryData(['issue', issue.number.toString()], issue);
    }
}
