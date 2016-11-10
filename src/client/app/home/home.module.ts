import { NgModule } from '@angular/core';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { ContribService } from './../core/services/contrib.service';

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule,
        AlertModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        ContribService
    ]
})
export class HomeModule { }
