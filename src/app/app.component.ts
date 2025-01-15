import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FilhoComponent} from "./filho/filho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('filhoComp')
  filhoCompRef!: FilhoComponent;

  hellho(){
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse oi';
    console.log('disse oi');
  }
}



