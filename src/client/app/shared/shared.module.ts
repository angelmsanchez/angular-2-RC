import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/index';
import { StepsComponent } from './components/steps/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import { ContribService } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, NavbarComponent, StepsComponent],
  exports: [HeaderComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, StepsComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, ContribService]
    };
  }
}
