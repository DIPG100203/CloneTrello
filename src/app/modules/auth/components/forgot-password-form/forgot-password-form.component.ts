import { Component } from '@angular/core';
import { BtnComponent } from "../../../shared/components/btn/btn.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './forgot-password-form.component.html',
  styles: ``
})
export class ForgotPasswordFormComponent {

}
