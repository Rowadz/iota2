import { Component, OnInit } from '@angular/core';
import { IParams } from 'angular-particle/lib';
import testConf from './helpers/test.helper';
import { DeepPartial } from 'utility-types';

@Component({
  selector: 'iota-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  conf: DeepPartial<IParams>;
  constructor() {}

  ngOnInit(): void {
    
    this.conf = testConf;

    console.log(this.conf);
  }
}
