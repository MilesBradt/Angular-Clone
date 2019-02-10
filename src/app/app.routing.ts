import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'game/:id',
    component: GameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
