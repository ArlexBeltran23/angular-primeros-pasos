import { DbzService } from '../services/dbz.service';
import { Characetr } from './../interfaces/character.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class  MainPageComponent {
    
    constructor( private dbzService: DbzService) {}

    get characters(): Characetr[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacter (id: string): void{
        this.dbzService.onDleteId(id);
    }

    onNewCharacter( character: Characetr){
        this.dbzService.addCharacter(character);
    }

}