import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Yerba Mate Sin Palo',
      descripcion: 'Yerba mate sin palo común de 1kg',
      precio: 12.000,
      stock: 100,
      disponible: true,
      imagen: 'Paquete solo.png',
    },
    {
      id: 2,
      nombre: 'Yerba Mate Sin Palo',
      descripcion: 'Yerba mate sin palo común de 500gr',
      precio: 6.500,
      stock: 150,
      disponible: true,
      imagen: 'Paquete solo.png',
    },
    {
      id: 3,
      nombre: 'Yerba Mate con Palo',
      descripcion: 'Yerba mate con palo de 1kg',
      precio: 10.000,
      stock: 200,
      disponible: false,
      imagen: 'Paquete solo.png',
    },
    {
      id: 4,
      nombre: 'Yerba Mate con Palo',
      descripcion: 'Yerba mate con palo de 500gr',
      precio: 5.500,
      stock: 250,
      disponible: true,
      imagen: 'Paquete solo.png',
    },
    {
      id: 5,
      nombre: 'Yerba Mate Sin Palo Premium',
      descripcion: 'Yerba mate sin palo organica de 1kg',
      precio: 15.000,
      stock: 90,
      disponible: false,
      imagen: 'Paquete solo.png',
    },
    {
      id: 6,
      nombre: 'Yerba Mate Con Palo Premium',
      descripcion: 'Yerba mate con palo organica de 1kg',
      precio: 14.000,
      stock: 90,
      disponible: true,
      imagen: 'Paquete solo.png',
    }
  ];
}
