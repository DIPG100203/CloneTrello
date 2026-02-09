import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../../../shared/components/btn/btn.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent, FaIconComponent, RouterLink],
  templateUrl: './register-form.component.html',
  styles: ``
})
export class RegisterFormComponent {

  faEye = faEye
  faEyeSlash = faEyeSlash


}
