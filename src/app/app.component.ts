import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data = ['1', '11', '111', '1111', '11111', '111111', '1111111', '11111111', ]




  id: number | undefined;

  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data=> this.id = +data);
  }

}
