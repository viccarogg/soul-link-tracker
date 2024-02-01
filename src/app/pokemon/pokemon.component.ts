import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/lib/models/Types';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pkmn: any;


}
