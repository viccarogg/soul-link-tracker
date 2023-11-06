import { Component, Input, OnInit } from '@angular/core';
import { Constants, Player, Pokemon, pastPlayers, PokemonStatus } from 'src/lib/models/Types';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  @Input() player: any;
  party: Pokemon[] = []


  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    for(let p of this.player.pokemonList) {
      this.pokeApi.getByName(p.name).subscribe((data) => {
        this.party.push(this.createPokemon(data))
      })
    }
   }

  createPokemon(data: any): Pokemon {
    let pkmn = {
      name: data.name,
      nickname: 'test',
      level: 50,
      acquired: '',
      sprite: data.sprites.front_default,
      status: PokemonStatus.Party,
      notes: ''
    }

    return pkmn;
   }
}
