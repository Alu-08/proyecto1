import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService} from '../../servicios/carritoService'
import { FavoritosService } from '../../servicios/favoritos-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(private carritoS: CarritoService, private favoritosService: FavoritosService) {}
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
      detalles: 'La yerba mate sin palo común de 1kg es una opción popular entre los amantes del mate. Esta yerba se caracteriza por su sabor intenso y amargo, ideal para aquellos que prefieren un mate más fuerte. Con un precio de 12000 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes buscan disfrutar de un buen mate sin gastar demasiado. Además, su presentación en paquete de 1kg garantiza una buena cantidad de yerba para compartir con amigos y familiares.',  
      cantidad: 1,
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
      detalles: 'La yerba mate sin palo común de 500gr es una opción perfecta para quienes buscan probar esta deliciosa bebida en cantidades menores. Con un precio de 6500 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes desean disfrutar de un buen mate sin gastar demasiado. Su presentación en paquete de 500gr garantiza una buena cantidad de yerba para disfrutar solo o con amigos.',  
      cantidad: 1,        
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
      detalles: 'La yerba mate con palo de 1kg es una opción tradicional para los amantes del mate que prefieren un sabor más suave y menos amargo. Con un precio de 10000 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes buscan disfrutar de un buen mate sin gastar demasiado. Su presentación en paquete de 1kg garantiza una buena cantidad de yerba para compartir con amigos y familiares.',
      cantidad: 1,  
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
      detalles: 'La yerba mate con palo de 500gr es una opción perfecta para quienes buscan probar esta deliciosa bebida en cantidades menores. Con un precio de 5500 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes desean disfrutar de un buen mate sin gastar demasiado. Su presentación en paquete de 500gr garantiza una buena cantidad de yerba para disfrutar solo o con amigos.',
      cantidad: 1,  
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
      detalles: 'La yerba mate sin palo orgánica de 1kg es una opción premium para los amantes del mate que buscan una calidad superior. Con un precio de 15000 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes desean disfrutar de un buen mate sin gastar demasiado. Su presentación en paquete de 1kg garantiza una buena cantidad de yerba para compartir con amigos y familiares.',
      cantidad: 1,
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
      detalles: 'La yerba mate con palo orgánica de 1kg es una opción tradicional para los amantes del mate que prefieren un sabor más suave y menos amargo. Con un precio de 14000 pesos, esta yerba ofrece una excelente relación calidad-precio para quienes buscan disfrutar de un buen mate sin gastar demasiado. Su presentación en paquete de 1kg garantiza una buena cantidad de yerba para compartir con amigos y familiares.',
      cantidad: 1,  
    },
  ];
  agregarAlCarrito(p: Producto): void {
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Producto " + p.nombre + " agregado al carrito",
  showConfirmButton: false,
  timer: 1500
});
    this.carritoS.añadirProducto(p);
  }
  agregarAFavoritos(p: Producto): void {
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Producto " + p.nombre + " agregado a favoritos",
  showConfirmButton: false,
  timer: 1500
});
    this.favoritosService.añadirFavorito(p);
  }
}
