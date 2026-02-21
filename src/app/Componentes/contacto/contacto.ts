import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log(this.formData);
    // Aquí luego puedes integrar EmailJS, backend o API
  }
}