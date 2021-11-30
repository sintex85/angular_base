import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

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
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }


  }
}
