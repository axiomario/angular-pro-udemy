import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Pokemon, PokemonResponse, SimplePokemon } from '../interfaces';

@Injectable({providedIn: 'root'})
export class PokemonService {
    constructor(private httpClient: HttpClient) { }

    public loadPage(page: number): Observable<SimplePokemon[]> {
        const size = 20;

        return this.httpClient.get<PokemonResponse>(
            `https://pokeapi.co/api/v2/pokemon?offset=${ Math.max(page, 0) * size }&limit=${ size }`
        ).pipe(
            map(response => response.results.map(pokemon => ({
                id: pokemon.url.split('/').at(-2) ?? '',
                name: pokemon.name
            })))
        );
    }

    public loadPokemon(id: number | string): Observable<Pokemon> {
        return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`).pipe(
          catchError(error => throwError(() => new Error(error.error ?? 'An error occurred')))
        );
    }

}
