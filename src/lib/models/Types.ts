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
            levelMet: 5,
            currentEvo: 'arceus',
            notes: ''},
            {name: 'dragonite',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'dragonite',
            notes: ''},
            {name: 'swampert',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'swampert',
            notes: ''},
            {name: 'gengar',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'gengar',
            notes: ''},
            {name: 'steelix',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'steelix',
            notes: ''},
            {name: 'clefable',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'clefable',
            notes: ''}
        ]
    },
    bigG_hof1: {
        name: 'Big G', 
        pokemonList: [
            {name: 'blastoise',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'blastoise',
            notes: ''},
            {name: 'magmar',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'magmar',
            notes: ''},
            {name: 'pupitar',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'pupitar',
            notes: ''},
            {name: 'umbreon',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'umbreon',
            notes: ''},
            {name: 'crobat',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'crobat',
            notes: ''},
            {name: 'dialga',
            nickname: '',
            level: 50,
            levelMet: 5,
            currentEvo: 'dialga',
            notes: ''}
        ]
    }
}

export interface Player {
    name: string;
    pokemonList: Pokemon[];
}

export interface LinkData {
    trainer: string;
    pkmn: Pokemon;
}

export interface Link {
    player1: LinkData;
    player2: LinkData;
    encounter: Encounter;
    status: PokemonStatus;
}
// [
//     {
//         player1: {
//             trainer: 'Big G',
//             pkmn: {
//                 name: data.name,
//                 nickname: 'test',
//                 level: 50,
//                 
//                 sprite: data.sprites.front_default,
//                 status: PokemonStatus.Party,
//                 notes: ''
//               }
//         },
//         player2: {
//             trainer: 'Big J',
//             pkmn: {
//                 name: data.name,
//                 nickname: 'test',
//                 level: 50,
//                 
//                 sprite: data.sprites.front_default,
//                 status: PokemonStatus.Party,
//                 notes: ''
//               }
//         }
//         encounter: {
//             route: 'route 1';
//             status: EncounterStatus.Success;
//             notes: ''
//         }
//     },
//     {
//         player1: {
//             trainer: 'Big G',
//             pkmn: {
//                 name: data.name,
//                 nickname: 'test',
//                 level: 50,
//                 
//                 sprite: data.sprites.front_default,
//                 status: PokemonStatus.Party,
//                 notes: ''
//               }
//         },
//         player2: {
//             trainer: 'Big J',
//             pkmn: {
//                 name: data.name,
//                 nickname: 'test',
//                 level: 50,
//                 
//                 sprite: data.sprites.front_default,
//                 status: PokemonStatus.Party,
//                 notes: ''
//               }
//         }
//         encounter: {
//             route: 'route 1';
//             status: EncounterStatus.Success;
//             notes: ''
//         }
//     }
// ]

export interface Pokemon {
    name: string;
    nickname: string;
    level: number;
    sprite: string;
    levelMet: number;
    currentEvo: string;
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

