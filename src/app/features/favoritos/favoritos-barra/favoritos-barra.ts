import { Component } from '@angular/core';
import { Favoritos } from '../../../core/servicios/favoritos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos-barra',
  imports: [FormsModule, CommonModule],
  templateUrl: './favoritos-barra.html',
  styleUrl: './favoritos-barra.css',
})
export class FavoritosBarra {

   favoritos: any[] = [];

  constructor(private favoritosService: Favoritos) {}

  ngOnInit() {
    this.favoritos = this.favoritosService.Obtenertodos();
  }
}
