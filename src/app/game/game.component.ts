import { Component, OnInit } from '@angular/core';
import { Item } from '../items/models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ItemService]
  })

  export class GameComponent implements OnInit {
  items: Item[];


  constructor(private itemService: ItemService, private router: Router) { }

  goToDetailPage(clickedGame: Item) {
    this.router.navigate(['game', clickedGame.name])
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  }
