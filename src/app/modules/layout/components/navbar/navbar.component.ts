import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, CommonModule, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;


  isOpen = false;
  isOpenBody = false;

}
