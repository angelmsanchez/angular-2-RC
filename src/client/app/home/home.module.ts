import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
    imports: [CommonModule, SharedModule, AlertModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService]
})
export class HomeModule { }
