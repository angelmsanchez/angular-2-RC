import { Component, OnInit } from '@angular/core';
import { ContribService } from '../shared/services/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.html'
})

export class HomeComponent implements OnInit {
  homeContrib: Object;
  activeSpinner: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ContribService.
   *
   * @param {ContribService} contribService - The injected ContribService.
   */
  constructor(private contribService: ContribService) {
    // let day = moment().format();
    // console.log('prueba moment', day);
  }

  ngOnInit() {
    this.activeSpinner = true;
    this.getHomeContrib();
  }

  goToUrl(url: string): boolean {
    if (url) {
      window.open(url);
    }
    return false;
  }

  private getHomeContrib() {
    this.contribService
      .getContrib('home')
      .subscribe(data => {
        this.homeContrib = data;
        this.activeSpinner = false;
      });
    return false;
  }

}
