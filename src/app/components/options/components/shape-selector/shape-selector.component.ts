import { Component } from '@angular/core';

@Component({
  selector: 'iota-shape-selector',
  templateUrl: './shape-selector.component.html',
  styleUrls: ['./shape-selector.component.scss']
})
export class ShapeSelectorComponent {
  readonly shapes: Array<string>;
  constructor() {
    this.shapes = ['Atoms', 'Atomz', 'Circles'];
  }

  onChangeShape(shape: string): void {
    console.log(shape);
  }
}
