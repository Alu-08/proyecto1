import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
Favoritos: Producto[] = [];

añadirFavorito(p: Producto) {
const producto = this.Favoritos.find(prod => prod.id === p.id);
if (producto) {
 Swal.fire("El producto ya esta en favoritos!");
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
