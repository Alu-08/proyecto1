import { Component } from '@angular/core';
import {Producto} from '../../models/producto';
import { OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carritoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  productosCarrito: Producto[] = [];
  constructor(private carritoS: CarritoService, private router: Router) {}
  ngOnInit() {
    this.productosCarrito = 
    this.carritoS.obtenerProducto();
  }
  aumentarCantidad(id: number) {
    this.carritoS.aumentarCantidad(id);
  }
  disminuirCantidad(id: number) {
    this.carritoS.disminuirCantidad(id);
  }
  eliminarProducto(id: number) {
    this.carritoS.eliminarProducto(id);
    this.productosCarrito = 
    this.carritoS.obtenerProducto();
  }
  vaciarCarrito() {
    this.productosCarrito = [];
  }
  finalizarCompra() {
    this.router.navigate(['/formulario-compra']);
    this.vaciarCarrito();

  }
  obtenerTotal(): number {
    return this.productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
}
