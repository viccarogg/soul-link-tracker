export class Constants {
    public readonly POKE_API_URL = 'https://pokeapi.co/api/v2/'
    public readonly BIGJ_HOF1: string[] = ['arceus', 'dragonite', 'swampert', 'gengar', 'steelix', 'clefable']
    public readonly BIGJ_HOF2: string[] = ['kyogre', 'quagsire', 'magcargo', 'sudowoodo', 'crobat', 'abomasnow']
    public readonly BIGG_HOF1: string[] = ['blastoise', 'magmar', 'pupitar', 'umbreon', 'crobat', 'dialga']
    public readonly BIGG_HOF2: string[] = ['ambipom', 'weavile', 'mamoswine', 'victreebel', 'whiscash', 'electivire']
}

export const pastPlayers = {
    bigJ_hof1: {
        name: 'Big J', 
        pokemonList: [
            {name: 'arceus',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'dragonite',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'swampert',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'gengar',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'steelix',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'clefable',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''}
        ]
    },
    bigG_hof1: {
        name: 'Big G', 
        pokemonList: [
            {name: 'blastoise',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'magmar',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'pupitar',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'umbreon',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'crobat',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''},
            {name: 'dialga',
            nickname: '',
            level: 50,
            acquired: '',
            notes: ''}
        ]
    }
}

export interface Player {
    name: string;
    pokemonList: Pokemon[];
}

export interface Pokemon {
    name: string;
    nickname: string;
    level: number;
    sprite: string;
    acquired: Encounter | string;
    status: PokemonStatus;
    notes: string;
    linkedTo?: Pokemon;
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

