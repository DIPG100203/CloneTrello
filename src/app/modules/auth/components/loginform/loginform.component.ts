import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { Router, RouterLink } from '@angular/router';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RequestStatus } from '../../../../models/request-status';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [
    FontAwesomeModule,
    BtnComponent,
    RouterLink,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './loginform.component.html',
  styles: ``,
})
export class LoginformComponent {
  form!: FormGroup;

  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  status: RequestStatus = 'init';
  showPassword = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.builForm()
  }

  private builForm() {
    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      this.auth.login(email, password).subscribe({
        next: () => {
          this.status = 'success'
          this.router.navigate(['/app'])
        },
        error: () => {
          this.status = 'failed'
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
