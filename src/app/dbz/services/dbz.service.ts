import { v4 as uuid} from 'uuid';
import { Character } from './../interfaces/character.interface';
 import { Injectable } from '@angular/core';


 @Injectable({
  providedIn: 'root'})
 export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public addCharacter (character: Character): void{
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  public onDeleteCharacter(i: number):void{
    //TODO: Emitir el ID del personaje
    this.characters.splice(i,1);
    console.log({i});

    }

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !== id);
    }



 }
