import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  Ofertas: Producto[] = [
    {
      id: 10,
      nombre: 'Ritual de autor',
      descripcion: 'Combo Yerba sabor Coco 500gr + Yerba sabor Jengibre y Limón',
      precio: 21000,
      stock: 100,
      disponible: true,
      imagen: 'Ritual de autor.png',
      detalles: '¿Sos de los que buscan un sabor diferente para cada momento del día? Te presentamos la combinación perfecta de nuestra Tierra Maté Montañoso. Dos blends únicos creados para transformar tus mates en una experiencia refrescante y natural.',  
      cantidad: 1,
    },
    {
      id: 11,
      nombre: 'Combo matero',
      descripcion: 'Combo Yerba sin palo + mate de madera y bombilla',
      precio: 28000,
      stock: 80,
      disponible: true,
      imagen: 'Combo mate.png',
      detalles: 'Hay rituales que no se negocian, se mejoran. Te presentamos el combo definitivo para los verdaderos amantes del buen mate. Un kit pensado para disfrutar del sabor más puro y natural, estés donde estés.',  
      cantidad: 1,
    },
    {
      id: 12,
      nombre: 'Trio de blends tradición',
      descripcion: '3 paquetes de yerba común con palo de 1kg',
      precio: 25000,
      stock: 90,
      disponible: true,
      imagen: 'Trio blendstradicion.png',
      detalles: 'Para los materos de ley, los que tienen la pava lista a toda hora y los que saben que el mate se comparte (o se disfruta en silencio mirando el paisaje). Lanzamos este pack de 3 kilos pensado para los verdaderos fanáticos de nuestro sabor más puro.',
      cantidad: 1,
    },
    {
      id: 13,
      nombre: 'Atardecer citrico',
      descripcion: 'Combo 2 paquetes de 1kg de yerba sabor jengibre y limon',
      precio: 25000,
      stock: 90,
      disponible: true,
      imagen: 'Atardecer citrico.png',
      detalles:'¿Hay algo mejor que un matecito al caer la tarde? Sí, ¡que tenga ese toque fresco y revitalizante que corta con la rutina! Te traemos este dúo imperdible para que nunca te falte la combinación más equilibrada de nuestra tierra.',
      cantidad: 1,
    },
    {
      id: 14,
      nombre: 'Cofre de autor',
      descripcion: 'Combo Mustra de cada una de las yerbas disponibles pr 500gr',
      precio: 37000,
      stock: 40,
      disponible: true,
      imagen: 'Cofre de autor.png',
      detalles:'Este cofre no es solo un empaque; es un homenaje a nuestro ritual más sagrado. Diseñado de forma artesanal en madera maciza y grabado con la esencia de la montaña, contiene una selección curada con todas nuestras variedades. El regalo definitivo para quien sabe apreciar los detalles y el buen mate.',
      cantidad: 1,
    },
    {
      id: 15,
      nombre: 'Paquete cargá el termo',
      descripcion: 'Combo Yerba mate sabor coco por 500gr + termo de 1lt de acero inoxidable',
      precio: 50000,
      stock: 500,
      disponible: true,
      imagen: 'Carga el termo.png',
      detalles:'Este combo exclusivo incluye un termo de acero inoxidable "Montañoso Tierra Maté" en color verde oliva, equipado con manija reforzada y un grabado del logo de la marca, junto con un paquete de 1 kg de yerba mate con sabor a Coco, presentado en un práctico envase hermético con cierre zipper para asegurar la máxima frescura de la molienda en cada cebada.',
      cantidad: 1,
    }
  ]
}
