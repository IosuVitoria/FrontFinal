// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contacto',
//   templateUrl: './contacto.component.html',
//   styleUrls: ['./contacto.component.css']
// })
// export class ContactoComponent {
//   showFlag: string = 'spain';

// constructor() {
//     this.showFlag = 'spain';
//   }

// showContactElement(flag: string): void {
//     this.showFlag = flag;
//   }
// }

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

  enviarCorreo(): void {
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const correo = document.getElementById('correo') as HTMLInputElement;
    const mensaje = document.getElementById('mensaje') as HTMLTextAreaElement;

    const mailtoLink = `mailto:info.colegio@colegio.com?subject=Consulta de contacto&body=Nombre: ${nombre.value}%0D%0ACorreo electrónico: ${correo.value}%0D%0AMensaje: ${mensaje.value}`;

    window.location.href = mailtoLink;
  }
}



