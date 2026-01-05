import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js'; 

@Component({
  selector: 'web-hero',
  standalone: true,
  imports: [NgxTypedJsModule], 
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
}