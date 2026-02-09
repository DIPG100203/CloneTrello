import { Component } from '@angular/core';
import { BackgroundComponent } from "../../components/background/background.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ForgotPasswordFormComponent } from "../../components/forgot-password-form/forgot-password-form.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, ForgotPasswordFormComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styles: ``
})
export class ForgotPasswordComponent {

}
