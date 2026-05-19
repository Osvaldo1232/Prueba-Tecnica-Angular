import { Component, Input } from '@angular/core';
import { Omdb } from '../../../core/servicios/omdb';

@Component({
  selector: 'app-modal-detalle-pelicula',
  imports: [],
  templateUrl: './modal-detalle-pelicula.html',
  styleUrl: './modal-detalle-pelicula.css',
})
export class ModalDetallePelicula {

   @Input() imdbID!: string;
  pelicula: any;

  constructor(private omdb: Omdb) {}

  ngOnInit() {
    this.omdb.ObtenerdetallePelicula(this.imdbID).subscribe(res => this.pelicula = res);
  }
}
