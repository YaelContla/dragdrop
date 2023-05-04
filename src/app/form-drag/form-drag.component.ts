import { Component } from '@angular/core';


import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface Persona {
  nombre: string;
  nuevoInput: NuevosInputs[];
}

interface NuevosInputs {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-form-drag',
  templateUrl: './form-drag.component.html',
  styleUrls: ['./form-drag.component.css']
})
export class FormDragComponent {

  addInput: string = '';

  persona: Persona = {
  
  nombre: 'Yael',
  nuevoInput: [
    // {id: 1, nombre:'input 1', labelName:'label 1'},
    {id: 1, nombre:'input 1' },
    {id: 2, nombre:'input 2'}
  ]
 }

 nuevoArray: any[] = [];

 agregarInput(){
  const inputNuevo: NuevosInputs = {
    id: this.persona.nuevoInput.length + 1,
    nombre: this.addInput
  }

  this.persona.nuevoInput.push({...inputNuevo});

  // this.addInput = '';

 }

 eliminar( index: number ){
  this.persona.nuevoInput.splice(index, 1);
 }

 guardar(){
  
  console.log('formulario agregado')
}

drop(event: CdkDragDrop<NuevosInputs[]>) {
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
