import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Omdb } from './core/servicios/omdb';
import { ListaPeliculas } from './features/peliculas/lista-peliculas/lista-peliculas';
import { BarraBusqueda } from './features/buscar/barra-busqueda/barra-busqueda';
import { ModalDetallePelicula } from './shared/componentes/modal-detalle-pelicula/modal-detalle-pelicula';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BarraBusqueda,
    ListaPeliculas,
    ModalDetallePelicula
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
mensajeError = '';
  peliculas: any[] = [];
  idSeleccionado: string | null = null;
  protected readonly title = signal('PruebaTecnica');

  constructor(private omdb: Omdb) {}

  onBuscarPeliculas(params: any) {
    if (!params || !params.titulo || params.titulo.trim() === '') {
      return;
    }

    this.omdb.BuscarPelicula(params.titulo, params.tipo, params.ano)
      .subscribe({
        next: (res) => {
          if (res.Response === 'True') {
            this.peliculas = res.Search.map((p: any) => ({
              imdbID: p.imdbID,
              titulo: p.Title,
              ano: p.Year,
              imagen: p.Poster,
              tipo: p.Type
            }));

             this.mensajeError="";
          } else {
            this.peliculas = [];
            this.mensajeError = res.Error || 'No se encontraron resultados';
           

          }
        },
        error: (err) => {
          console.error('Error en la petición de OMDb:', err);
          this.peliculas = [];
        }
      });
  }

  abrirModal(imdbID: string) {
    this.idSeleccionado = imdbID;
  }

  cerrarModal() {
    this.idSeleccionado = null;
  }
}