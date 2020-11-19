import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public listHeaders: string[];
  // public collection: Order[];
  public collection$: Observable<Client[]>;
  public states = Object.values(StateClient);
  private obs = new Observable((subscribers) => {
    subscribers.next('hey');
  });
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cs: ClientsService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sub = this.obs.subscribe((data) => {
      console.log(data);
    });

    this.listHeaders = [
      "Name",
      "TotalHT",
      "TVA",
      "TotalTTC",
      "State"
    ];

    this.route.data.subscribe((param) => {
    });

    // this.os.collection.subscribe((data) => {
    //   this.collection = data;
    // });

    this.collection$ = this.cs.collection;
  }

  public changeState(item: Client, event): void {
    const state = event.target.value;
    this.cs.changeState(item, state).subscribe((res) => {
      // test errors
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

}
