import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Productos } from './paginas/productos/productos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { InicioSecion } from './aut/inicio-secion/inicio-secion';
import { Registro } from './aut/registro/registro';

export const routes: Routes = [
    {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'inicio', component: Productos},
    {path: 'inicio', component: Ofertas},
    {path: 'inicio', component: Contacto},
    {path: 'inicio', component: Carrito},
    {path: 'inicio', component: Favoritos},
    {path: 'inicio', component: InicioSecion},
    {path: 'inicio', component: Registro},
    {path: '***', redirectTo: 'inicio'}

];
