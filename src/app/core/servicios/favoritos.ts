import { Injectable } from '@angular/core';
import { Detalle } from './modelos/pelicula.model';

@Injectable({
  providedIn: 'root',
})
export class Favoritos {
 private llaves = 'favoritos';

    Obtenertodos(): Detalle[] {
    return JSON.parse(localStorage.getItem(this.llaves) || '[]');
  }

  Agregar(movie: Detalle) {
    const favoritos = this.Obtenertodos();
    favoritos.push({ ...movie, addedAt: Date.now() });
    localStorage.setItem(this.llaves, JSON.stringify(favoritos));
  }

  Eliminar(imdbID: string) {
    const favoritos = this.Obtenertodos().filter(m => m.imdbID !== imdbID);
    localStorage.setItem(this.llaves, JSON.stringify(favoritos));
  }

  Existe(imdbID: string): boolean {
    return this.Obtenertodos().some(m => m.imdbID === imdbID);
  }
}
