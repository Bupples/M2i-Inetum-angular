import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-dark',
  templateUrl: './tab-dark.component.html',
  styleUrls: ['./tab-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabDarkComponent implements OnInit {
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
