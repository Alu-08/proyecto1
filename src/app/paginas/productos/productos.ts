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
      precio: 12000,
      stock: 100,
      disponible: true,
      imagen: 'Paquete1kg.png',
      favorito: false,
    },
    {
      id: 2,
      nombre: 'Yerba Mate Sin Palo',
      descripcion: 'Yerba mate sin palo común de 500gr',
      precio: 6500,
      stock: 150,
      disponible: true,
      imagen: 'Paquete500gr.png',
      favorito: false,
    },
    {
      id: 3,
      nombre: 'Yerba Mate con Palo',
      descripcion: 'Yerba mate con palo de 1kg',
      precio: 10000,
      stock: 200,
      disponible: true,
      imagen: 'Paquetepalo1kg.png',
      favorito: false,
    },
    {
      id: 4,
      nombre: 'Yerba Mate con Palo',
      descripcion: 'Yerba mate con palo de 500gr',
      precio: 5500,
      stock: 250,
      disponible: true,
      imagen: 'Paquetepalo500gr.png',
      favorito: false,
    },
    {
      id: 5,
      nombre: 'Yerba Mate Sin Palo Premium',
      descripcion: 'Yerba mate sin palo organica de 1kg',
      precio: 15000,
      stock: 90,
      disponible: true,
      imagen: 'Paqueteorganica1kg.png',
      favorito: false,
    },
    {
      id: 6,
      nombre: 'Yerba Mate Con Palo Premium',
      descripcion: 'Yerba mate con palo organica de 1kg',
      precio: 14000,
      stock: 90,
      disponible: true,
      imagen: 'Paqueteorganicapalo1kg.png',
      favorito: false,
    }
  ];
}
