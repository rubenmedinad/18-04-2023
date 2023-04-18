import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-lista',
  templateUrl: './hijo-lista.component.html',
  styleUrls: ['./hijo-lista.component.css']
})
export class HijoListaComponent {
@Input() productos: any=[];
}
