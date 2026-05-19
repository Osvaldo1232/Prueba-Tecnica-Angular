import { Component, Input, ChangeDetectorRef } from '@angular/core'; 
import { Omdb } from '../../../core/servicios/omdb';

@Component({
  selector: 'app-modal-detalle-pelicula',
  imports: [],
  templateUrl: './modal-detalle-pelicula.html',
  styleUrl: './modal-detalle-pelicula.css',
})
export class ModalDetallePelicula {

  private _imdbID!: string;
  pelicula: any = null;

  constructor(private omdb: Omdb, private cdr: ChangeDetectorRef) {}

  @Input()
  set imdbID(id: string) {
    if (id) {
      this._imdbID = id;
      this.cargarDetallePelicula(id);
    }
  }

  get imdbID(): string {
    return this._imdbID;
  }

  private cargarDetallePelicula(id: string) {
    this.pelicula = null; 

    this.omdb.ObtenerdetallePelicula(id).subscribe({
      next: (res) => {
        this.pelicula = res;
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error al obtener los detalles de la película:', err);
      }
    });
  }
}