import { Component, OnInit } from '@angular/core';

/**
 * @despriction need to project 3 elements with class header, class nav and class footer
 */

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public open = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.open = !this.open;
  }

}
