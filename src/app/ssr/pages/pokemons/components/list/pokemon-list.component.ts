import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../card/pokemon-card.component';
import { SimplePokemon } from '../../interfaces';

@Component({
    standalone: true,
    imports: [PokemonCardComponent],
    selector: 'pokemon-list',
    templateUrl: 'pokemon-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonListComponent implements OnInit {
    public pokemons = input.required<SimplePokemon[]>();
    constructor() { }

    ngOnInit() { }
}