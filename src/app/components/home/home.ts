import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { MainFeatures } from '../main-features/main-features';
import { Analytics } from '../analytics/analytics';
import { CustomerResults } from '../customer-results/customer-results';
import { CustomerCards } from '../customer-cards/customer-cards';
import { GetStarted } from '../get-started/get-started';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, MainFeatures, Analytics, CustomerResults, CustomerCards, GetStarted, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {
  ngOnInit() {
    const allowBtn = document.getElementById('allowBtn');
    const testBtn = document.getElementById('testBtn');

    allowBtn?.addEventListener('click', () => {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          alert('Permiso concedido');
        } else {
          alert('Permiso denegado');
        }
      });
    });

    testBtn?.addEventListener('click', () => {
      if (Notification.permission === 'granted') {
        new Notification('Prueba', {
          body: 'Esta es una notificación de prueba',
          icon: '/icons/icon-144x144.png',
        });
      } else {
        alert('Primero debes permitir notificaciones');
      }
    });
  }

}
