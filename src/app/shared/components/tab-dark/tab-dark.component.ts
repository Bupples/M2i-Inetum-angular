import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-dark',
  templateUrl: './tab-dark.component.html',
  styleUrls: ['./tab-dark.component.scss']
})
export class TabDarkComponent implements OnInit {
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
