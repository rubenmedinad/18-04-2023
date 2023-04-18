import { tipoProducto } from './tipoProducto';

export class Productos {
  id: number = 0;

  nombre: string = '';

  cantidad: number = 0;

  precio: number = 0;

  tp: tipoProducto;

  constructor(tp: tipoProducto,id: number,nombre: string,cantidad: number,precio: number) {
    this.id= id;
    this.nombre= nombre;
    this.cantidad= cantidad;
    this.precio= precio;
    this.tp = tp;
  }

}
