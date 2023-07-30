import { Component, SimpleChanges } from '@angular/core';
import { PokeapiService } from 'src/audiodex/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Audiodex';
  

  // updatePokedexLength(){
  //   if(this.pokedexLength == NaN 
  //     || this.pokedexLength <= 0 
  //     || this.pokedexLength >= 906){
  //     this.pokedexLength = "Invalid Input Exception: Looking For Number Between 1-905";
  //     console.log("Invalid Input Exception: Looking For Number Between 1-905- Input Returned: " + this.pokedexLength);
  //   }else{
  //     this._pokedexLength = this.pokedexLength;
  //     console.log("updatePokedexLength() fired- Output:" + this._pokedexLength);
  //     this.getPokemonData();
  //   }
  // }
  

  constructor(private pokeAPI : PokeapiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  //get data of pokemon from this appended link https://pokeapi.co/api/v2/pokemon/pokedexLength
  spreakerArrayLength = 7;
  pokemonSpreakerDataArray: Object = '';
  pokemonSpreakerEndpoint:string = '';
  pokemonDataArrayLength:number = 1;
  pokemonDataArray: any[] = Array.apply(null, Array(this.pokemonDataArrayLength)).map(function (x, i) { return i; });
  pokemonSpeciesDataArray: any[] = Array.apply(null, Array(this.pokemonDataArrayLength)).map(function (x, i) { return i; });
  display: boolean = true;
  inputID: any = '';
  pokedexNumber: any = '';
  pokemonName:any = '';
  pokemonID:any = '';
  pokemonArt:any = '';
  pokemonFlavorText:any = '';
  pokemonDisplayName: any = '';
  

  pokemonEndpoint:string = '';
  pokemonSpeciesEndpoint:string ='';
  getPokemonData(){
      let i = 0;
      this.pokemonEndpoint = this.pokeAPI.getPokemonFromPokeAPIURL + (this.pokedexNumber);
      this.pokemonSpeciesEndpoint = this.pokeAPI.getPokemonSpeciesDataViaPokeAPIURL + (this.pokedexNumber);
      this.pokeAPI.getData(this.pokemonEndpoint).subscribe(data=>this.pokemonDataArray[0]=data);
      this.pokeAPI.getData(this.pokemonSpeciesEndpoint).subscribe(data=>this.pokemonSpeciesDataArray[0]=data);
      this.pokemonName = this.pokemonDataArray[0].name;
      this.pokemonID = this.pokedexNumber;
      this.pokemonDisplayName = "#" + this.pokedexNumber + ": " + this.pokemonName 
      this.pokemonFlavorText = this.pokemonSpeciesDataArray[0].flavor_text_entries[0].flavor_text;
  }

  ngOnInit(): void {
    this.getPokemonData();

  }
  
  ngOnChange(): void {
    this.getPokemonData();

  }
  updatePokedex(){
    this.pokedexNumber = this.inputID;
    this.getPokemonData();
  }
  
}
