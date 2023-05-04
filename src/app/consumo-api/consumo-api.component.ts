import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoApiComponent {

  URL: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemones:any[] = [];

  constructor( public http: HttpClient){}


  consumirApi(){

    // https://pokeapi.co/api/v2/ability/battle-armor

    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .subscribe ( (resp:any) => { 
      console.log(resp.results);
      this.pokemones = resp.results
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.pokemones, event.previousIndex, event.currentIndex);
  }

}
