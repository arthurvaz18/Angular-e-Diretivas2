import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('meuInput')
  meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv')
  minhaDivEl!: ElementRef<HTMLDivElement>;

  updateInputText(){
  this.meuInputEl.nativeElement.value ='Texto Atualizado!';
  console.log('atualizou');
  }

  focus(){
  this.meuInputEl.nativeElement.focus();
  console.log('deu foco');
  }

  updateDivContent(){
      this.minhaDivEl.nativeElement.textContent = 'Conteudo Atualizado!!!'
    console.log('Conteudo');

  }
}



