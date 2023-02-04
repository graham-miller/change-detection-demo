import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../models/item.interface';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  changeName($event) {
    console.log('ListComponent.changeName()');
    // this.items[0].name = $event.target.value;
    // this.items[0] = { ...this.items[0], name: $event.target.value };
  }
}
