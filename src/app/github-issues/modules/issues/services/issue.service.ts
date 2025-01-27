import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueById, getIssueComments } from '../actions';

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

    constructor() { }

    setIssueId(issueId: string): void {
        this.issueId.set(issueId);
    }
}