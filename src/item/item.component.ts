import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input() item;

  constructor() {}

  checkedRender(): boolean {
    console.log('ItemComponent.checkedRender()');
    return true;
  }
}
