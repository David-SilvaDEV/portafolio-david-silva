import { Component } from '@angular/core';
import { Experiencia } from "../experiencia/experiencia";
import { ProyectosComponent } from "../proyectos/proyectos";
import { Me } from "../me/me";
import { Contacto } from '../contacto/contacto';
import { FooterComponent } from '../footer/footer';

@Component({
  standalone:true,
  selector: 'app-body',
  imports: [Experiencia, ProyectosComponent, Me,Contacto,FooterComponent],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
