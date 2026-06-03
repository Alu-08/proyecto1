import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritosService } from '../../servicios/favoritos-service';
import { CarritoService } from '../../servicios/carritoService';
@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  favoritos: Producto[] = [];
  constructor(private favoritosService: FavoritosService,private carritoService: CarritoService) {}
  ngOnInit() {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }
  eliminarFavorito(id: number) {
    this.favoritosService.eliminarFavorito(id);
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }
  agregarAlCarrito(p: Producto) {
    alert(`Producto ${p.nombre} agregado al carrito`);
    this.carritoService.añadirProducto(p);

  }
}
