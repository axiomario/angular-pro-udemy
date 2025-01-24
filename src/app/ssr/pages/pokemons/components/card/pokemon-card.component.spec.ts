import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonCardComponent } from "./pokemon-card.component";
import { provideRouter } from "@angular/router";
import { SimplePokemon } from "../../interfaces";

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur'
};

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;
  let component: PokemonCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon input', () => {
    expect(component.pokemon()).toBeTruthy();
    expect(component.pokemon()).toEqual(mockPokemon);
  });

  it('should render pokemon name and image', () => {
    /*const image = fixture.debugElement.query(By.css('img'));
    expect(image).toBeTruthy();
    expect(image!.nativeElement.getAttribute('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');*/
    const image = compiled.querySelector('img');
    const name = compiled.querySelector('h2');

    expect(image).toBeDefined();
    expect(image!.src).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ mockPokemon.id }.png`);
    expect(name).toBeDefined();
    expect(name!.textContent).toBe(mockPokemon.name);
  });

  it('should have the proper ng-reflect-router-link', () => {
    const div = compiled.querySelector('div');
    const routerLink = div!.attributes.getNamedItem('ng-reflect-router-link');

    expect(div).toBeDefined();
    expect(routerLink).toBeDefined();
    expect(routerLink!.value).toContain(mockPokemon.name);
  });
});
