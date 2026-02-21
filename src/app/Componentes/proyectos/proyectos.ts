import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ==========================================
   INTERFAZ (BUENA PRÁCTICA)
========================================== */
interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
  imagenes: string[];
}

@Component({
  standalone: true,
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosComponent implements OnInit {

  /* ==========================================
     DATA
  ========================================== */
  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'Deities',
      descripcion: 'Disquera musical desarrollada con Angular.',
      url: 'https://david-silvadev.github.io/Deities', // ← cambia por tu URL real
      imagenes: [
        '/media/img/proyectos/deities/deitiesweb.webp',
        '/media/img/proyectos/deities/deitieswebtableta.webp',
        '/media/img/proyectos/deities/deitieswebphone.webp'
      ],


    },
    {
      id: 2,
      titulo: 'Cannabi Doctor',
      descripcion: 'Descubre los beneficios del cannabis medicinal, su uso seguro y responsable para mejorar la salud y el bienestar.',
      url: 'https://cannabi-doctor.netlify.app', // ← cambia por tu URL real
      imagenes: [
        '/media/img/proyectos/cannabi/cannabiweb.webp',
        '/media/img/proyectos/cannabi/cannabitableta.webp',
        '/media/img/proyectos/cannabi/cannabiphone.webp'
      ],


    },

    {
      id: 3,
      titulo: 'Gestor de Proyectos',
      descripcion: 'Gestor de proyectos desarrollado con ASP.NET, con API propia y backend robusto para una gestión eficiente y segura de tareas.',
      url: 'https://github.com/David-SilvaDEV/GestorProyectos', // ← cambia por tu URL real
      imagenes: [
        '/media/img/proyectos/gestorproyectos/gestor1.webp',

        '/media/img/proyectos/gestorproyectos/gestor3.webp'
      ],


    }
  ];

  /* ==========================================
     ESTADO DEL CARRUSEL
  ========================================== */
  currentIndex: Record<number, number> = {};

  /* ==========================================
     MODAL
  ========================================== */
  modalOpen: boolean = false;
  modalImage: string = '';

  /* ==========================================
     INIT
  ========================================== */
  ngOnInit(): void {
    this.proyectos.forEach(proyecto => {
      this.currentIndex[proyecto.id] = 0;
    });
  }

  /* ==========================================
     CARRUSEL
  ========================================== */
  nextImage(id: number): void {
    const proyecto = this.getProyectoById(id);
    if (!proyecto) return;

    this.currentIndex[id] =
      (this.currentIndex[id] + 1) % proyecto.imagenes.length;
  }

  prevImage(id: number): void {
    const proyecto = this.getProyectoById(id);
    if (!proyecto) return;

    this.currentIndex[id] =
      (this.currentIndex[id] - 1 + proyecto.imagenes.length) %
      proyecto.imagenes.length;
  }

  /* ==========================================
     MODAL
  ========================================== */
  openModal(proyecto: Proyecto, index: number): void {
    this.modalImage = proyecto.imagenes[index];
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.modalImage = '';
  }

  /* ==========================================
     HELPER
  ========================================== */
  private getProyectoById(id: number): Proyecto | undefined {
    return this.proyectos.find(p => p.id === id);
  }
}