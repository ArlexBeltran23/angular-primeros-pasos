import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characetr } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: `./list.component.html`,
  styleUrls: ['./list.component.css'],
})
export class ListComponent { 

  @Input()
  public characterList: Characetr[] = [{
    id: '',
        name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  oneDeleteCharacter(i: string):void{
    this.onDeleteId.emit(i)
    }

}
