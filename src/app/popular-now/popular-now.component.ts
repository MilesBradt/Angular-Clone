import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service'

@Component({
  selector: 'app-popular-now',
  templateUrl: './popular-now.component.html',
  styleUrls: ['./popular-now.component.css'],
  providers: [ItemService]
})

export class PopularNowComponent implements OnInit {
  items: Item [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
