import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { MainFeatures } from '../main-features/main-features';
import { CustomerCards } from '../customer-cards/customer-cards';
import { GetStarted } from '../get-started/get-started';

@Component({
  selector: 'app-ui',
  imports: [CommonModule, Navbar, MainFeatures, GetStarted, CustomerCards],
  templateUrl: './ui.html',
  styleUrl: './ui.css'
})
export class Ui {

}
