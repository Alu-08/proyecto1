import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-compra',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-compra.html',
  styleUrl: './formulario-compra.css',
})
export class FormularioCompra {
  datosCompra = {
    nombre: '',
    email: '',
    telefono: '',
    calle: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    titular: '',
    numeroTarjeta: '',
    vencimiento: '',
    cvv: '',
    terminos: false
  };

  constructor(private router: Router) { }

  confirmarCompra() {
    if (this.datosCompra.terminos) {
      console.log('Compra confirmada:', this.datosCompra);
      alert('¡Compra realizada con éxito! Gracias por tu compra.');
      this.router.navigate(['/']);
    }
  }

  cancelar() {
    if (confirm('¿Estás seguro de que deseas cancelar la compra?')) {
      this.router.navigate(['/']);
    }
  }

  obtenerTotal(): string {
    // Aquí se obtendría el total del carrito
    // Por ahora retorna un valor de ejemplo
    return '0.00';
  }

  enviarFormulario() {
    const inputs = document.querySelectorAll('form-label').values;
    if (inputs.length > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Compra realizada con éxito!",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/']);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa todos los campos para finalizar la compra",
      });
    }

  }
}

