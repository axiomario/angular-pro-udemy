import { ApplicationRef, ChangeDetectionStrategy, Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "./components/list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./components/list/skeleton/pokemon-list-skeleton.component";
import { PokemonService } from './services/pokemon.service';
import { SimplePokemon } from './interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    standalone: true,
    imports: [PokemonListComponent, PokemonListSkeletonComponent],
    selector: 'pokemons',
    templateUrl: 'pokemons.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class PokemonsComponent implements OnInit, OnDestroy {
    public pokemons = signal<SimplePokemon[]>([]);
    public isLoading = signal(true);
    private _activatedRoute = inject(ActivatedRoute); 
    public currentPage = toSignal<number>(
        this._activatedRoute.queryParamMap.pipe(
            map(params => params.get('page')),
            map(page => !page || isNaN(parseInt(page)) ? 0 : parseInt(page)),
            map(page => Math.max(page, 0))
        )
    );
    private appRef = inject(ApplicationRef);
    private $appRef = this.appRef.isStable.subscribe(isStable => {
        console.log('isStable', isStable);
    });

    logEffect = effect(() => {
        console.log('Page changed:', this.currentPage());
        this.loadPokemons();
    }, { allowSignalWrites: true });

    constructor(private _router: Router,  private _pokemonService: PokemonService) { }

    ngOnInit() { }

    ngOnDestroy(): void {
        this.$appRef.unsubscribe();
    }

    public loadPokemons(): void {
        this._pokemonService.loadPage(this.currentPage() || 0)?.subscribe(data => {
            console.log(data);
            this.pokemons.set(data);
            setTimeout(() => {
                this.isLoading.set(false);
            }, 2000);
        });
    }

    public updatePage(value: number): void {
        const page = Math.max((this.currentPage() || 0) + value, 0);

        this._router.navigate([], { queryParams: { page } });
    }
}