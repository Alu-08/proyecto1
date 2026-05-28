import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
Carrito: Producto[] = [];

añadirProducto(p: Producto): void {
this.Carrito.push(p);
}

obtenerProducto(): Producto[] {
return this.Carrito;
}

aumentarCantidad(id: number): void {

const producto = this.Carrito.find(p => p.id === id);
if (producto) {
producto.cantidad++;
}

}

disminuirCantidad(id: number): void{
const producto = this.Carrito.find(p => p.id === id);
if (producto && producto.cantidad > 1) {
producto.cantidad--;
}

}
eliminarProducto(): void {
this.Carrito = this.Carrito.filter(p => p.id !== p.id)
}
}
