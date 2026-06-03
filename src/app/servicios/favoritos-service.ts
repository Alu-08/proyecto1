import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
Favoritos: Producto[] = [];

añadirFavorito(p: Producto) {
const producto = this.Favoritos.find(prod => prod.id === p.id);
if (producto) {
 alert('El producto ya está en favoritos');
}else{
 this.Favoritos.push(p);
}
}

obtenerFavoritos(): Producto[] {
return this.Favoritos;
}

eliminarFavorito(id: number): void {
this.Favoritos = this.Favoritos.filter(p => p.id !== id)
}
}
