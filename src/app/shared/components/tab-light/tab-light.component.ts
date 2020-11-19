import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tab-light',
  templateUrl: './tab-light.component.html',
  styleUrls: ['./tab-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabLightComponent implements OnInit {
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
