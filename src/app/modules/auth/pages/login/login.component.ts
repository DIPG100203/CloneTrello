import { Component } from '@angular/core';
import { BackgroundComponent } from "../../components/background/background.component";
import { HeaderComponent } from "../../components/header/header.component";
import { LoginformComponent } from "../../components/loginform/loginform.component";
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, LoginformComponent, RouterLink, FooterComponent],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

}
