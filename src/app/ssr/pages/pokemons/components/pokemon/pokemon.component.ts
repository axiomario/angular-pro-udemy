import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../interfaces';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    standalone: true,
    imports: [],
    selector: 'pokemon',
    templateUrl: 'pokemon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class PokemonComponent implements OnInit {
    public pokemon = signal<Pokemon | null>(null);

    constructor(private _pokemonService: PokemonService, private _activatedRoute: ActivatedRoute) {
        const name = this._activatedRoute.snapshot.paramMap.get('id') || '';
        
        this._pokemonService.loadPokemon(name).subscribe(data => {
            console.log(data);
            this.pokemon.set(data);
        });
    }

    ngOnInit() { }
}