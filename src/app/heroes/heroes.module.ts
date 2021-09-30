import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core"; 


import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoHeroes } from "./listado/listado.component";
import { PokemonesComponent } from './pokemones/pokemones.component';
import { FormsModule } from "@angular/forms";



@NgModule({ 
    declarations:[
        HeroeComponent,
        ListadoHeroes,
        PokemonesComponent
    ],
    exports:[
        ListadoHeroes,
        PokemonesComponent
    ],
    imports:[
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,

    ],
    
})

export class HeroesModule{}