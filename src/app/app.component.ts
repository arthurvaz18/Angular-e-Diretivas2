import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FilhoComponent} from "./filho/filho.component";
import {of} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FilhoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  buttonList =[
    'botao1',
    'botao2',
    'botao3'
  ];
  @ViewChildren('meuButton')
  buttonEl!: QueryList<ElementRef<HTMLButtonElement>>

  ngAfterViewInit() {
    console.log(this.buttonEl.toArray());

    const primeiro = this.buttonEl.toArray()[0];

    primeiro.nativeElement.style.background = 'blue';
  }

  changeColor(event: Event){
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.background = 'red';
    btnElement.style.color = 'white';
  }

  resetButton(){
    this.buttonEl.forEach((btnEl)=> {
      btnEl.nativeElement.style.background = '';
      btnEl.nativeElement.style.color = 'black';
    })
  }
}



