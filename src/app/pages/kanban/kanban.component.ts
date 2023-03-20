import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {
  @ViewChild('put')
  input!: ElementRef<HTMLInputElement>;


  backlog: string[] = [];
  inProgress: string[] = [];
  review: string[] = [];
  done: string[] = [];
 
  constructor() {
    
    
  }

  drop(event: CdkDragDrop<string[] >) {
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
  teste(teste: string){
    this.backlog.push(teste);
    this.input.nativeElement.value = '';
    
  }
}
