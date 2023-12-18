import { Injectable } from '@angular/core';
import { Characetr } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Characetr[] = [{
        id: uuid(),
        name: 'krilin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    },
];

addCharacter( character: Characetr):void{
    const newCharacter = {...character, id: uuid()}
    this.characters.push(newCharacter)
}
// this.characters.splice(i, 1);

onDleteId(id: string){
    this.characters = this.characters.filter (character => character.id !== id)
}

}