import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
Carrito: Producto[] = [];

añadirProducto(p: Producto) {
const producto = this.Carrito.find(prod => prod.id === p.id);
if (producto) {
producto.cantidad++;
}else{

  this.Carrito.push(p);
}
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
eliminarProducto(id: number): void {
this.Carrito = this.Carrito.filter(p => p.id !== id)
}
}
