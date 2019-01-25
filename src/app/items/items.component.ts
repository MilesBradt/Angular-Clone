import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: Item [] = [
    new Item("Bear Plushie", "Seller 1", 15.00),
    new Item("Another Bear Plushie", "Seller 2", 20.00),
    new Item("Scarf", "Seller 3", 25.00),
    new Item("Shirt", "Seller 4", 25.00),
    new Item("Toys", "Seller 5", 10.00),
    new Item("Wallet", "Seller 3", 25.00),
  ]


}
