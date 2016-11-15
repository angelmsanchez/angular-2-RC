import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToastModule } from './toast/toast.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class CoreModule { }
