import { Component, OnInit } from '@angular/core';
import { Constants, Pokemon } from 'src/lib/models/Types';
import { PokeapiService } from '../services/pokeapi.service';

const parties = { 
  BIGJ_HOF1: ['arceus', 'dragonite', 'swampert', 'gengar', 'steelix', 'clefable'],
  BIGJ_HOF2: ['kyogre', 'quagsire', 'magcargo', 'sudowoodo', 'crobat', 'abomasnow'],
  BIGG_HOF1: ['blastoise', 'magmar', 'pupitar', 'umbreon', 'crobat', 'dialga'],
  BIGG_HOF2: ['ambipom', 'weavile', 'mamoswine', 'victreebel', 'whiscash', 'electivire']
}


@Component({
  selector: 'app-party-tab',
  templateUrl: './party-tab.component.html',
  styleUrls: ['./party-tab.component.css']
})
export class PartyTabComponent implements OnInit {
  p1party: any = [];
  p2party: any = [];
  resp: any;

  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    for(let p of parties.BIGG_HOF1) {
      this.pokeApi.getByName(p).subscribe((data) => {
        this.p1party.push(data)
      })
    }

    console.log(this.pokeApi.getParty(parties.BIGG_HOF1))

    // this.p1party = Promise.all(parties.BIGJ_HOF1.map(async p => this.pokeApi.getByName(p).subscribe()))
    // this.p2party = Promise.all(parties.BIGG_HOF1.map(async p => this.pokeApi.getByName(p)))

    this.resp = this.pokeApi.getByName('smeargle')

    // console.log(this.p1party)
    // console.log(this.p2party)
    // console.log(this.resp)
  }

}
