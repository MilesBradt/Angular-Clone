import { Component, OnInit } from '@angular/core';
import { Item } from '../items/models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ItemService]
  })

  export class GameComponent implements OnInit {
  items: Item[];
  gameName: string = null;
  gameToDisplay: Item;


  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  goToDetailPage(clickedGame: Item) {
    this.router.navigate(['game', clickedGame.name])
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.route.params.forEach((urlParameters) => {
      this.gameName = urlParameters['name'];
    })
    this.gameToDisplay = this.itemService.getItemByName(this.gameName);
  }

  }
