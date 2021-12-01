import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes : Personaje[] = [
    { nombre: 'Goku', poder: 9000 },
    { nombre: 'Vegeta', poder: 8000 },
    { nombre: 'Piccolo', poder: 7000 },
    { nombre: 'Cell', poder: 6000 },
  ];
 
  nuevo : Personaje = {
    nombre: '',
    poder: 0
  };

  agregarNuevoPersonaje( argumento: Personaje ){
    this.personajes.push(argumento);
    
  }
}
