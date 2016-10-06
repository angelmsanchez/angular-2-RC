import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

/**
 * This class represents the footer component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.html',
  styleUrls: ['footer.css']
})

export class FooterComponent implements OnInit {
  actualYear: number;

  ngOnInit() {
    this.actualYear = moment().get('year');
  }
}
