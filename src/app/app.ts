import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { MainFeatures } from './components/main-features/main-features';
import { Analytics } from './components/analytics/analytics';
import { CustomerResults } from './components/customer-results/customer-results';
import { CustomerCards } from './components/customer-cards/customer-cards';
import { GetStarted } from './components/get-started/get-started';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, MainFeatures, Analytics, CustomerResults, CustomerCards, GetStarted, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundoParcial');
}
