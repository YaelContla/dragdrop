import { Component } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-new-formdrag',
  templateUrl: './new-formdrag.component.html',
  styleUrls: ['./new-formdrag.component.css']
})
export class NewFormdragComponent {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo2 = ['1', '2', '3', '4'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  

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
