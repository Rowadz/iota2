import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  private state: any;
  constructor() {}

  changeState(obj: any): void {
    this.state = Object.assign({}, this.state, obj);
    this.state = { ...this.state, ...obj };
  }
}
