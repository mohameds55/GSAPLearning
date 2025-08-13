import { Component } from '@angular/core';
import { AnimationDirectiveDirective } from '../../shared/directives/animation-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends AnimationDirectiveDirective {}
