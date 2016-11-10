import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToastModule } from './toast/toast.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContribService } from './services/contrib.service';

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule
    ],
    exports: [
        RouterModule,
        ToastModule,
        HeaderComponent,
        NavbarComponent,
        FooterComponent
        // ExponentialStrengthPipe
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent
    ]
    // providers: [
    //     ContribService
    // ]
})
export class CoreModule { }
