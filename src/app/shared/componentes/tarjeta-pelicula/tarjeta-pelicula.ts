import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuscarResultado } from '../../../core/servicios/modelos/pelicula.model';

@Component({
  selector: 'app-tarjeta-pelicula',
  imports: [],
  templateUrl: './tarjeta-pelicula.html',
  styleUrl: './tarjeta-pelicula.css',
})
export class TarjetaPelicula {
    @Input() peliculas!: BuscarResultado;

    @Output() verDetalle = new EventEmitter<string>();

 masinfor() {

  console.log(this.peliculas.imdbID)
    this.verDetalle.emit(this.peliculas.imdbID);
  }
}
