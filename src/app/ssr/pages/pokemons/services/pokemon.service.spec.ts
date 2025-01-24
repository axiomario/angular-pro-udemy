import { TestBed } from "@angular/core/testing";
import { PokemonService } from "./pokemon.service";
import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { PokemonResponse, SimplePokemon } from "../interfaces";
import { catchError } from "rxjs";

const expectedPokemons: SimplePokemon[] = [
    { id: '1', name: 'bulbasaur' },
    { id: '2', name: 'ivysaur' }
];
const mockPokemon = { id: 1, name: 'bulbasaur' };
const mockResponse: PokemonResponse = {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    "previous": "",
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
    ]
};

describe('PokemonService', () => {
    let service: PokemonService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        service = TestBed.inject(PokemonService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should load a page of SimplePokemons', () => {
        const page = 5;
        const size = 20;

        service.loadPage(page).subscribe(pokemons => {
            expect(pokemons).toEqual(expectedPokemons);
        });

        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon?offset=${ Math.max(page, 0) * size }&limit=${ size }`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
    });

    it('should load a pokemon by id', () => {
        const name = 'bulbasaur';

        service.loadPokemon(name).subscribe((pokemon: any) => {
            expect(pokemon).toEqual(mockPokemon);
        });

        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${ name }`);
        expect(req.request.method).toBe('GET');
        req.flush(mockPokemon);
    });

    it('should catch error if pokemon not found', () => {
        const name = 'exodia';

        service.loadPokemon(name).pipe(
            catchError(error => {
                expect(error.message).toBe('Pokemon not found');
                return [];
            })
        ).subscribe();

        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${ name }`);
        expect(req.request.method).toBe('GET');
        req.flush('Pokemon not found', {
            status: 404,
            statusText: 'Not found'
        });
    });
});
