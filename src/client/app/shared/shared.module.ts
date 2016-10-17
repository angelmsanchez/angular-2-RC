import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent, NavbarComponent, FooterComponent } from './components/index';
import { ContribService } from './services/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent],
    exports: [
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        FormsModule,
        RouterModule],
    providers: [
        ContribService]
})

export class SharedModule { }
