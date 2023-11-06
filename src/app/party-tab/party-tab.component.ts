import { Component, OnInit } from '@angular/core';
import { Constants, Pokemon, pastPlayers } from 'src/lib/models/Types';


@Component({
  selector: 'app-party-tab',
  templateUrl: './party-tab.component.html',
  styleUrls: ['./party-tab.component.css']
})
export class PartyTabComponent implements OnInit {
  player1 = pastPlayers.bigJ_hof1
  player2 = pastPlayers.bigG_hof1
  p1party: any = [];
  p2party: any = [];
  resp: any;

  constructor() {}

  ngOnInit(): void {
    

    // console.log('getParty', this.pokeApi.getParty(pastPlayers.bigJ_hof1.pokemonList.map(x=> x.name)).subscribe( (data)=> {data}))
    // console.log('getByName array', this.p1party)

    // this.p1party = Promise.all(parties.BIGJ_HOF1.map(async p => this.pokeApi.getByName(p).subscribe()))
    // this.p2party = Promise.all(parties.BIGG_HOF1.map(async p => this.pokeApi.getByName(p)))

    // this.resp = this.pokeApi.getByName('smeargle')

    // console.log(this.p1party)
    // console.log(this.p2party)
    // console.log(this.resp)
  }

}
