import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import axios from "axios";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoHeroes{
	heroes:string[] = ["Hulk", "Thor", "Ironman", "Spiderman", "Capitan America"]

  	heroeBorrado:string[] = [];

	  


  	borrarHeroe(){


    const inputSeleccionado =  <HTMLInputElement>document.querySelector('input[name="heroes"]:checked')
    const heroeSeleccion = inputSeleccionado.value

    // console.log(heroeSeleccion);

    // console.log("borrando....")
    this.heroeBorrado = [this.heroes[Number(heroeSeleccion)]];
    Swal.fire({
      title: 'Estas borrando a '+ this.heroeBorrado,
      confirmButtonText: 'Seguro?',
      showCloseButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.heroeBorrado = this.heroes.splice(Number(heroeSeleccion), 1) || "";

      } else if (result.isDenied) {
        Swal.fire('No tenemos más arena para gatos', '', 'info')
      }
    })
  }
}





 




  
//   heroes:string[] = ["Hulk", "Thor", "Ironman", "Spiderman", "Capitan America"]

//   heroeBorrado:string[] = [];


//   borrarHeroe(){


//     const inputSeleccionado =  <HTMLInputElement>document.querySelector('input[name="heroes"]:checked')
//     const heroeSeleccion = inputSeleccionado.value

//     // console.log(heroeSeleccion);

//     // console.log("borrando....")
//     this.heroeBorrado = [this.heroes[Number(heroeSeleccion)]];
//     Swal.fire({
//       title: 'Estas borrando a '+ this.heroeBorrado,
//       confirmButtonText: 'Seguro?',
//       showCloseButton: true,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         Swal.fire('Saved!', '', 'success')
//         this.heroeBorrado = this.heroes.splice(Number(heroeSeleccion), 1) || "";

//       } else if (result.isDenied) {
//         Swal.fire('No tenemos más arena para gatos', '', 'info')
//       }
//     })
//   }


