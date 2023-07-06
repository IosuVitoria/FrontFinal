import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  showFlag: string = 'spain';

constructor() {
    this.showFlag = 'spain';
  }

showContactElement(flag: string): void {
    this.showFlag = flag;
  }
}

