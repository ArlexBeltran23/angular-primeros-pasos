import { Component, EventEmitter, Output } from '@angular/core';
import { Characetr } from '../../interfaces/character.interface';
import { tap } from 'rxjs';

@Component({
    selector: 'add-character',
    templateUrl: './character.component.html'
})

export class CharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Characetr> = new EventEmitter();
  
    public character: Characetr = {
        id: '',
        name: '',
        power: 0
    };
    emitCharacter():void{
        if (this.character.name.length === 0) return; 
        this.onNewCharacter.emit({...this.character});
        this.character.name = '';
        this.character.power = 0;
    }
}