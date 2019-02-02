import { Injectable } from '@angular/core';
import { Item } from './items/models/item.model'
import { ITEMS } from './mock-items'

@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
    return ITEMS;
  }

}
