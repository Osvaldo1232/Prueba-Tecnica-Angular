import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busqueda',
 imports: [FormsModule],
  templateUrl: './barra-busqueda.html',
  styleUrl: './barra-busqueda.css',
})
export class BarraBusqueda {
   titulo = '';
  tipo = '';
  ano = '';

  @Output() search = new EventEmitter<any>();

  Buscar() {
  
    this.search.emit({
      titulo: this.titulo,
      tipo: this.tipo,
      ano: this.ano
    });
  }
}
