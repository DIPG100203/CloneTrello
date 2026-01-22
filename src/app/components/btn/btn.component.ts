import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styles: ``
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button'
  
  @Input() color = 'primary';




}
