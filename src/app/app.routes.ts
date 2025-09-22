import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Ui } from './components/ui/ui';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ui', component: Ui },
  { path: '**', redirectTo: '' }
];
