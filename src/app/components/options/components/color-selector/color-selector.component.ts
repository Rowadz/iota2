import { Component, OnInit, Input } from "@angular/core";
import dialogPolyfill from "dialog-polyfill";
import { v4 } from "uuid";

@Component({
  selector: "iota-color-selector",
  templateUrl: "./color-selector.component.html",
  styleUrls: ["./color-selector.component.scss"]
})
export class ColorSelectorComponent implements OnInit {
  @Input() isBg: boolean;
  readonly id: string;
  constructor() {
    this.id = v4();
  }

  ngOnInit() {}

  openModal(): void {
    const dialog: HTMLElement = document.getElementById(this.id);
    dialogPolyfill.registerDialog(dialog);
    (dialog as any).showModal();
  }
}
