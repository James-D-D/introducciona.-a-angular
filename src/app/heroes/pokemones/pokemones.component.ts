import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
})




export class PokemonesComponent implements OnInit{


  name: string = "";
  pokemones:any =[];
  pokeBorrado:any;

  

  constructor(private pokemonService : PokemonService) { }
  
  ngOnInit():void{}
  
  async search(){
    this.pokemonService.getPokemon( this.name).subscribe((data:any) => {
      this.pokemones = data.results
      console.log(this.pokemones)
      return this.pokemones
    })
  }

  borrarPoke(){


    const inputSeleccionado =  <HTMLInputElement>document.querySelector('input[name="pokemones"]:checked')
    const pokeSeleccion = inputSeleccionado.value

    // console.log(pokeSeleccion);

    // console.log("borrando....")
    this.pokeBorrado   = [this.pokemones[String(pokeSeleccion)]];

    console.log(this.pokeBorrado[0].name);
    
    Swal.fire({
      title: 'Estas borrando a '+ this.pokeBorrado[0].name,
      confirmButtonText: 'Seguro?',
      showCloseButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.pokeBorrado = this.pokemones.splice(Number(pokeSeleccion), 1) || "";

      } else if (result.isDenied) {
        Swal.fire('No tenemos más arena para gatos', '', 'info')
      }
      console.log(this.pokeBorrado)
    })
  }
  
}
