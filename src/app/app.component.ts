import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'ejercicio1';

  edad1!:any;
  edad2!:any;
  suma!:any;
  promedio!:any;

  constructor()
  {
  this.limpiar();
  }

  calcular()
  {

   
    this.suma=this.edad1+this.edad2;

    this.promedio=this.suma/2;

  }

limpiar()
{
  this.edad1="";
  this.edad2="";
  this.suma="";
  this.promedio="";
}
}
