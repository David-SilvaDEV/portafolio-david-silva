import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Componentes/header/header";
import { Layout } from "./Componentes/layout/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-david-silva');
}
