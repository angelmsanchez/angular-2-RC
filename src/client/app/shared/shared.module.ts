import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, NavbarComponent, FooterComponent, BackButtonComponent } from './components/index';
import { ContribService } from './services/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        BackButtonComponent],
    exports: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        BackButtonComponent,
        FormsModule,
        RouterModule],
    providers: [
        ContribService]
})

export class SharedModule { }
