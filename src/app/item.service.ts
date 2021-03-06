import { Injectable } from '@angular/core';
import { Item } from './items/models/item.model'
import { ITEMS } from './mock-items'

@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
    return ITEMS;
  }

  getItemByName(gameName: string) {
    for (let i = 0; i <= ITEMS.length - 1; i++) {
      if(ITEMS[i].name === gameName) {
        return ITEMS[i];
      }
    }
  }

}
