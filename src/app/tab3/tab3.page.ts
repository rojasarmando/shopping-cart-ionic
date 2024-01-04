import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cliente: string = '';
  productos: any[] = [
    { nombre: 'Producto 1', cantidad: 0, precio: 10 },
    { nombre: 'Producto 2', cantidad: 0, precio: 15 },
    { nombre: 'Producto 3', cantidad: 0, precio: 20 }
  ];

  constructor() { }

  guardarPedido() {
    // Lógica para guardar el pedido
    console.log('Pedido guardado:', this.cliente, this.productos);
  }

}
