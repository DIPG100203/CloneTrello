import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { TodoList } from '../../models/todo-list';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, CdkDrag, CdkDropList, CommonModule],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ]
})
export class BoardComponent {
  todos: TodoList[] = [
    {
      id: '1',
      title: 'Learn Angular',
    },
    {
      id: '2',
      title: 'Build an app',
    },
    {
      id: '3',
      title: 'Deploy to production',
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
