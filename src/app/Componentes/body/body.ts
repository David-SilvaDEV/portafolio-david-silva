import { Component } from '@angular/core';
import { Experiencia } from "../experiencia/experiencia";

@Component({
  standalone:true,
  selector: 'app-body',
  imports: [Experiencia],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
