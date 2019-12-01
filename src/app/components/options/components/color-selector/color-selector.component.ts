import { Component, OnInit, Input } from "@angular/core";
import dialogPolyfill from "dialog-polyfill";
import { v4 } from "uuid";
import colors from "./colors.helpers";

@Component({
  selector: "iota-color-selector",
  templateUrl: "./color-selector.component.html",
  styleUrls: ["./color-selector.component.scss"]
})
export class ColorSelectorComponent implements OnInit {
  @Input() isBg: boolean;
  readonly id: string;
  colors: Array<string>;

  constructor() {
    this.id = v4();
    this.colors = colors;
  }

  ngOnInit() {}

  openModal(): void {
    const dialog: HTMLElement = document.getElementById(this.id);
    dialogPolyfill.registerDialog(dialog);
    (dialog as any).showModal();
  }

  changeColor(color: string): void {
    console.log(color);
  }
}
