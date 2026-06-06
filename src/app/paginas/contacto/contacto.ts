import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  enviarFormulario(){
    const inputs = document.querySelectorAll("input-group").values
    if(inputs.length > 1){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Tu consulta fue enviada con exito!",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa todos los campos para enviar tu consulta!",
      });
    }
  }
}
