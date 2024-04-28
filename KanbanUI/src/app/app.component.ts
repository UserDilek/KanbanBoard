import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from '../Models/board.model';
import { Column } from '../Models/column.model';
import { CommonModule } from '@angular/common';
import {DragDropModule,CdkDragDrop  ,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  board:Board = new Board("Dilek Board", [

    new Column("Ideas",["Some Random Idea", "This another idea", "build an awesome application"]),
    new Column("Research",["Lorem Ipsum", "Check LinkedIn", "Lorem Ipsum2"]),
    new Column("Todo",["Get to work", "Pick Up Groceries", "Sleep"]),
    new Column("Done",["Get Up", "Take Shower", "Walk DOg"]),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
