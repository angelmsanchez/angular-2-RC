import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AlertModule,
        RouterModule.forRoot(HomeRoutes)],
    declarations: [
        HomeComponent],
    exports: [
        HomeComponent,
        RouterModule]
})
export class HomeModule { }
