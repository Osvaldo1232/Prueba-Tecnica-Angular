export interface BuscarResultado {
  imdbID: string;
  titulo: string;
  ano: string;
  imagen: string;
  tipo: string;
}

export interface Detalle extends BuscarResultado {
  Genero: string;
  Plot: string;
  Runtime: string;
  Director: string;

  addedAt?: number;
}