import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
public characterList: Character[] = [{
  name: 'Trunks',
  power: 100
}]
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacter(id?:string):void{
  //TODO: Emitir el ID del personado

if(!id) return ;
console.log(id);
  this.onDelete.emit(id);
}

}
