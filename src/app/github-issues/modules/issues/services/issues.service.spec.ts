import { TestBed } from "@angular/core/testing";
import { IssuesService } from "./issues.service";
import { provideAngularQuery, provideTanStackQuery, QueryClient } from "@tanstack/angular-query-experimental";
import { State } from "../interfaces";

describe('IssuesService', () => {
    let service: IssuesService;
    const queryClient = new QueryClient();

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [provideTanStackQuery(queryClient)]
        });
        service = TestBed.inject(IssuesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should load labels', async () => {
      const { data } = await service.labelsQuery.refetch();
      expect(data).toBeDefined();
      const [ first ] = data!;

      expect(typeof first.color).toBe('string');
      expect(typeof first.default).toBe('boolean');
      expect(typeof first.description).toBe('string');
      expect(typeof first.id).toBe('number');
      expect(typeof first.name).toBe('string');
      expect(typeof first.node_id).toBe('string');
      expect(typeof first.url).toBe('string');
    });

    it('should set selected state', async () => {
      service.showIssuesByState(State.Closed);
      const { data: closed } = await service.issuesQuery.refetch();

      expect(service.selectedState()).toBe(State.Closed);
      expect(closed).toBeDefined();
      expect(
        closed!.every(item => item.state === State.Closed)
      ).toBeTrue();

      service.showIssuesByState(State.Open);
      expect(service.selectedState()).toBe(State.Open);
    });

    it('should filter by label', async () => {
      const filter = 'Accessibility';
      service.toggleLabel(filter);
      const { data } = await service.issuesQuery.refetch();

      expect(data).toBeDefined();
      expect(
        data!.every(item => item.labels.some(label => label.name === filter))
      ).toBeTrue();
    });

    it('should set/unset labels', () => {
      const label = 'Accessibility';

      service.toggleLabel(label);
      expect(service.selectedLabels().has(label)).toBeTrue();
      service.toggleLabel(label);
      expect(service.selectedLabels().has(label)).toBeFalse();
    });
});
