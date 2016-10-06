import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.html'
})

export class HomeComponent implements OnInit {
  day: string;

  ngOnInit() {
    this.day = moment().format('dddd DD MMMM  YYYY');
  }

}
