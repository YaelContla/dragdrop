import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-forms-drag-drop',
  templateUrl: './forms-drag-drop.component.html',
  styleUrls: ['./forms-drag-drop.component.css']
})
export class FormsDragDropComponent {

  URL: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemones:any[] = [];
  public done:any[] = [''];

  constructor( public http: HttpClient){}


  consumirApi(){

    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .subscribe ( (resp:any) => { 
      console.log(resp.results);
      this.pokemones = resp.results
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
