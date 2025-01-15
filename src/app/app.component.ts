import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FilhoComponent} from "./filho/filho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit, AfterViewInit{
  @ViewChild('meuInput', {static: true, })
  meuInputEl!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(){
    console.log('ngOnInit', this.meuInputEl);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit', this.meuInputEl);

    this.meuInputEl.nativeElement.focus()
  }
}



