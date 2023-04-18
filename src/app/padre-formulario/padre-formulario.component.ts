import { Component } from '@angular/core';
import { Productos } from '../modelos/Productos';
import { tipoProducto } from '../modelos/tipoProducto';
@Component({
  selector: 'app-padre-formulario',
  templateUrl: './padre-formulario.component.html',
  styleUrls: ['./padre-formulario.component.css']
})
export class PadreFormularioComponent {
  tp: string="";
  producto = new Productos(tipoProducto.alimentos,0,"",0,0)
  productos:Productos[] = [];


  anadir(){
    this.producto.tp = tipoProducto[this.tp as keyof typeof tipoProducto]
    this.productos.push(this.producto)
    this.producto = new Productos(tipoProducto.Alimentos_Perecedereos,0,"",0,0)
    console.log(this.productos)
  }
}
