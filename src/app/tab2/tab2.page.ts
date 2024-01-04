import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cedula: string = '';
  nombre: string = '' ;
  direccion: string = '' ;
  telefono: string = '';

  constructor() {}

  

  guardar() {
    // Aquí puedes implementar la lógica para guardar los datos.
    // Por ejemplo, puedes enviarlos a un servicio o almacenarlos en el local storage.
    console.log('Cédula:', this.cedula);
    console.log('Nombre:', this.nombre);
    console.log('Dirección:', this.direccion);
    console.log('Teléfono:', this.telefono);
  }

}
