import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';



import { KanbanComponent } from './kanban.component';
import { RouterModule } from '@angular/router';
import { KanbanRoutes } from './kanban.routes';
import { InputDirective } from 'src/app/shared/input.directive';




@NgModule({
  declarations: [
    KanbanComponent,
    InputDirective
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(KanbanRoutes),
  ]
})
export class KanbanModule { }
