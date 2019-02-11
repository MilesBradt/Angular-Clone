import { Component, OnInit } from '@angular/core';
import { Item } from '../items/models/item.model';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemService]
  })

  export class HomeComponent implements OnInit {
  items: Item[];


  constructor(private itemService: ItemService, private router: Router) { }

  goToDetailPage(clickedGame: Item) {
    this.router.navigate(['game', clickedGame.name])
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  }
