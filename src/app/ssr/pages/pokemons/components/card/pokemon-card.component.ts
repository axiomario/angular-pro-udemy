import { Component, computed, effect, input, OnInit } from '@angular/core';
import { SimplePokemon } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterLink],
    selector: 'pokemon-card',
    templateUrl: 'pokemon-card.component.html'
})

export class PokemonCardComponent implements OnInit {
    public pokemon = input.required<SimplePokemon>();
    public readonly image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ this.pokemon().id }.png`);

    logEffect = effect(() => {
        //console.log('PokemonCard:', this.pokemon());
    });

    constructor() { }

    ngOnInit() { }
}
