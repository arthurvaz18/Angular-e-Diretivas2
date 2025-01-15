import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
const funcaoPai = () => {
  let pai = 'pai';

  const funcaoFilho = () =>{
    let filho = 'filho';

    pai = 'teste';
  }
}
