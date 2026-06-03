import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Productos } from './paginas/productos/productos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { InicioSecion } from './aut/inicio-secion/inicio-secion';
import { Registro } from './aut/registro/registro';
import { FormularioCompra } from './paginas/formulario-compra/formulario-compra';

export const routes: Routes = [
    {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
    {path: 'Inicio', component: Inicio},
    {path: 'Productos', component: Productos},
    {path: 'Ofertas', component: Ofertas},
    {path: 'Contacto', component: Contacto},
    {path: 'Carrito', component: Carrito},
    {path: 'Favoritos', component: Favoritos},
    {path: 'InicioSecion', component: InicioSecion},
    {path: 'Registro', component: Registro},
    {path: 'formulario-compra', component: FormularioCompra},
    {path: '***', redirectTo: 'inicio'}

];
