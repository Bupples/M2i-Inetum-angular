import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

/**
 * Get item state
 * Generate a string state-canceled if item.state === CANCELED
 * Generate a string state-option if item.state === OPTION
 * Generate a string state-confirmed if item.state === CONFIRMED
 * etc. if other state
 *
 * ---
 *
 * Bind host element property (td) with generated string
 */
@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;

  @HostBinding('class') hostElemClass: string;

  constructor() {

  }

  ngOnChanges(): void {
    this.hostElemClass = `state-${this.appState.toLowerCase()}`;
  }

}
