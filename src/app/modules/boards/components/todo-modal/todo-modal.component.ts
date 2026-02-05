import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { BtnComponent } from "../btn/btn.component";
import { TodoList } from '../../models/todo-list';


interface InputData {
  todo: TodoList
}

interface OutputData {
  rta: boolean
}

@Component({
  selector: 'app-todo-modal',
  standalone: true,
  imports: [FaIconComponent, BtnComponent],
  templateUrl: './todo-modal.component.html',
  styles: [``],
})
export class TodoModalComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: TodoList


  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo
  }


  closeModal() {

    this.dialogRef.close({
      rta: true
    })

  }

  closeWithRta(rta: boolean) {

    this.dialogRef.close({rta})

  }

}
