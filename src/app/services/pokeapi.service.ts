import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Constants } from 'src/lib/models/Types';

const POKE_API_URL = 'https://pokeapi.co/api/v2'
const parties = { 
  BIGJ_HOF1: ['arceus', 'dragonite', 'swampert', 'gengar', 'steelix', 'clefable'],
  BIGJ_HOF2: ['kyogre', 'quagsire', 'magcargo', 'sudowoodo', 'crobat', 'abomasnow'],
  BIGG_HOF1: ['blastoise', 'magmar', 'pupitar', 'umbreon', 'crobat', 'dialga'],
  BIGG_HOF2: ['ambipom', 'weavile', 'mamoswine', 'victreebel', 'whiscash', 'electivire']
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  public async getParty(party: string[], options?: any) {
    const pkmn1 = this.http.get(`${POKE_API_URL}/pokemon/${party[0]}`, options).subscribe(data => data);
    const pkmn2 = this.http.get(`${POKE_API_URL}/pokemon/${party[1]}`, options).subscribe(data => data);
    const pkmn3 = this.http.get(`${POKE_API_URL}/pokemon/${party[2]}`, options).subscribe(data => data);
    const pkmn4 = this.http.get(`${POKE_API_URL}/pokemon/${party[3]}`, options).subscribe(data => data);
    const pkmn5 = this.http.get(`${POKE_API_URL}/pokemon/${party[4]}`, options).subscribe(data => data);
    const pkmn6 = this.http.get(`${POKE_API_URL}/pokemon/${party[5]}`, options).subscribe(data => data);
    return [pkmn1, pkmn2, pkmn3, pkmn4, pkmn5, pkmn6]
  }

  public getByName(name: string, options?: any) {
    return this.http.get(`${POKE_API_URL}/pokemon/${name}`, options);
  }
  
  public post(url: string, options?: any) {
    return this.http.post(url, options);
  }

  public put(url: string, options?: any) {
    return this.http.put(url, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }


}
