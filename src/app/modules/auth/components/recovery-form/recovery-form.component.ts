import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../../../shared/components/btn/btn.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [FaIconComponent, FontAwesomeModule, BtnComponent, RouterLink],
  templateUrl: './recovery-form.component.html',
  styles: ``
})
export class RecoveryFormComponent {

  faEye = faEye
  faEyeSlash = faEyeSlash

}
