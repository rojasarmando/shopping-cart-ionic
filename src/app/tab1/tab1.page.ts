import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}
  public pedidos: Array<any> = [
    { date: '2023-05-25', orderNumber: '001', client: 'Cliente A' },
    { date: '2023-05-26', orderNumber: '002', client: 'Cliente B' },
    { date: '2023-05-27', orderNumber: '003', client: 'Cliente C' }
  ];

  crearPedido() {
    this.router.navigate(['/home/tab3']);
  }

}
