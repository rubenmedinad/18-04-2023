import { Component, EventEmitter, Output } from '@angular/core';
import { pedido } from '../modelos/pedidos';
@Component({
  selector: 'app-padre-formulario2',
  templateUrl: './padre-formulario2.component.html',
  styleUrls: ['./padre-formulario2.component.css']
})
export class PadreFormulario2Component {

  pedido1:pedido[] = [];

  constructor(){
  }

  ngOnInit(): void{

  }
  anadirpedido(pedidopedido:any){
    this.pedido1=pedidopedido

  }

}
