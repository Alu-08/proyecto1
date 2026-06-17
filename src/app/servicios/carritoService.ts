import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  Carrito: Producto[] = [];

  añadirProducto(p: Producto) {
    // Evitamos el conflicto usando 'item' para buscar en el arreglo
    const productoExistente = this.Carrito.find(item => item.id === p.id);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      // Como 'cantidad' es obligatoria en tu interfaz, nos aseguramos
      // de asignarle un valor inicial de 1 antes de meterlo al arreglo
      p.cantidad = 1;
      this.Carrito.push(p);
    }
  }

  obtenerProducto(): Producto[] {
    return this.Carrito;
  }

  aumentarCantidad(id: number): void {
    const producto = this.Carrito.find(p => p.id === id);
    // El 'if' es obligatorio porque .find() podría devolver 'undefined' si el id no existe
    if (producto) {
      producto.cantidad++;
    }
  }

  disminuirCantidad(id: number): void {
    const producto = this.Carrito.find(p => p.id === id);
    // Verificamos que exista y que sea mayor a 1 para no ir a valores negativos
    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminarProducto(id: number): void {
    this.Carrito = this.Carrito.filter(p => p.id !== id);
  }
}