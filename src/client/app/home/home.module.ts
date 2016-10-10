import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, SharedModule, AlertModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
