import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from "../../card/pokemon-card.component";

@Component({
    standalone: true,
    imports: [PokemonCardComponent],
    selector: 'pokemon-list-skeleton',
    templateUrl: 'pokemon-list-skeleton.component.html'
})

export class PokemonListSkeletonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}