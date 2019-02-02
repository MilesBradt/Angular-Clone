import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model'
import { Item } from '../items/models/item.model'
import { ItemService } from '../item.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ItemService]
})

export class UsersComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  users: User [] = [
    new User("User 1", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "),
    new User("User 2", "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "),
    new User("User 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum orci nec orci dictum, at posuere neque iaculis. Integer hendrerit convallis dui a placerat. Aenean."),
  ]


}
