import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = [
    'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'
  ]

  model = new SuperHero(100, 'Dr. Taro', this.powers[3], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true
  }

  newHero() {
    this.model = new SuperHero(42, '', '');
  }

}
