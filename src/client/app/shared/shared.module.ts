import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, NavbarComponent, FooterComponent, BackButtonComponent, SpinnerComponent } from './components/index';
import { ContribService } from './services/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        BackButtonComponent,
        SpinnerComponent
    ],
    exports: [
        FormsModule,
        RouterModule,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        BackButtonComponent,
        SpinnerComponent
    ],
    providers: [
        ContribService
    ]
})

export class SharedModule { }
