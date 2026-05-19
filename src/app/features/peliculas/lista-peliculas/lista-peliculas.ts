import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuscarResultado } from '../../../core/servicios/modelos/pelicula.model';
import { TarjetaPelicula } from '../../../shared/componentes/tarjeta-pelicula/tarjeta-pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-peliculas',
  imports: [CommonModule,TarjetaPelicula],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas {

   @Input() peliculas: BuscarResultado[] = [];
   @Output() verDetalle = new EventEmitter<string>();
}
