import { Component, output } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
  CdkDropListGroup,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {DialogModule, Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Column, TodoList } from '../../models/todo-list';
import { TodoModalComponent } from '../../components/todo-modal/todo-modal.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkDrag,
    CdkDropList,
    CommonModule,
    CdkDropListGroup
  ],
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
  ],
})
export class BoardComponent {

  constructor(
    private dialog: Dialog 
  ) {}

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'Learn Angular',
        },
        {
          id: '2',
          title: 'Build an app',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Deploy to production',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Create a project plan',
        },
      ],
    },
  ];

  todos: TodoList[] = [];

  doing: TodoList[] = [];
  done: TodoList[] = [];

  drop(event: CdkDragDrop<TodoList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  openDialog(todo: TodoList) {
    const dialogRef =this.dialog.open(TodoModalComponent, {
      minWidth: '400px',
      maxWidth: '50%',
      data: {
        todo: todo,
      }
    })
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

}
