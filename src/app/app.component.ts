import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nombre = '';
}

// export class AppComponent {
//   onClick() {
//     alert('Utilizando eventos en Angular')
//   }
// }

// export class AppComponent {
//   title = 'Semana 11';
//   valor = "Víctor Balboa Mercado"
//   //tipo = "hidden"
//   tipo = "password"
//   img = "assets/comercio.png"
//   enlace = "https://elcomercio.pe/"
//   clase01 = "azul"
//   clase02 = "rojo"
// }
