import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PopularNowComponent } from './popular-now/popular-now.component';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularNowComponent,
    ItemsComponent,
    UsersComponent,
    SearchComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
