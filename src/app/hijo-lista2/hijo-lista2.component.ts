import { Component, EventEmitter, Output } from '@angular/core';
import { pedido } from '../modelos/pedidos';

@Component({
  selector: 'app-hijo-lista2',
  templateUrl: './hijo-lista2.component.html',
  styleUrls: ['./hijo-lista2.component.css']
})
export class HijoLista2Component {
  idPedido: number=0
  idCliente: number=0
  nombreCliente: string=""
  totalProducto: number=0
  importeTotal: number=0
  arrayPedido: pedido[]=[];
  @Output() pedidopedido = new EventEmitter <pedido[]>()
  ngOnInit(){
  }
  anadir(){
    this.arrayPedido.push(new pedido(this.idPedido, this.idCliente, this.nombreCliente, this.totalProducto, this.importeTotal))
    this.pedidopedido.emit(this.arrayPedido)
  }

}
