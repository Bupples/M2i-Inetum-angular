import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crm-gfi-nov';

  public changeTitle(): void {
    this.title = 'New Title';
  }
}
