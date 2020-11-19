import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Redirect (href)
 * Redirect (routerLink)
 * or Do action by clicking
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() href: string;
  @Input() route: string;
  @Input() action: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public doAction(): void {
    this.clicked.emit('btn clicked!');
  }

}
