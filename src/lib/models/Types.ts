export class Constants {
    public readonly POKE_API_URL = 'https://pokeapi.co/api/v2/'
    public readonly BIGJ_HOF1: string[] = ['arceus', 'dragonite', 'swampert', 'gengar', 'steelix', 'clefable']
    public readonly BIGJ_HOF2: string[] = ['kyogre', 'quagsire', 'magcargo', 'sudowoodo', 'crobat', 'abomasnow']
    public readonly BIGG_HOF1: string[] = ['blastoise', 'magmar', 'pupitar', 'umbreon', 'crobat', 'dialga']
    public readonly BIGG_HOF2: string[] = ['ambipom', 'weavile', 'mamoswine', 'victreebel', 'whiscash', 'electivire']
}

export interface Player {
    name: string;
    pokemonList: Pokemon[];
}

export interface Pokemon {
    name: string;
    nickname: string;
    level: number;
    acquired: Encounter | string;
    notes: string;
}

export interface Encounter {
    route: string;
    status: EncounterStatus
    notes: string;
}

export enum EncounterStatus {
    Success = 'Success',
    Failed = 'Failed',
}

export enum PokemonStatus {
    Party = 'Party',
    Bench = 'Bench',
    Dead = 'Dead'
}

