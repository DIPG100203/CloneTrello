import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FaIconComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    NgClass,
    CommonModule,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'item 1',
      items: [
        {
          label: 'subitem 1.1',
        },
        {
          label: 'subitem 1.2',
        },
        {
          label: 'subitem 1.3',
        },
      ],
    },
    {
      label: 'item 2',
      items: [
        {
          label: 'subitem 2.1',
        },
        {
          label: 'subitem 2.2',
        },
        {
          label: 'subitem 2.3',
        },
      ],
    },
    {
      label: 'item 3',
      items: [
        {
          label: 'subitem 3.1',
        },
        {
          label: 'subitem 3.2',
        },
        {
          label: 'subitem 3.3',
        },
      ],
    },
  ];
}
