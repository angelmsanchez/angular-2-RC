import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent, CounterComponent } from './components/index';
// import { BackButtonComponent, SpinnerComponent } from './components/index';
import { ExponentialStrengthPipe } from './pipes/index';
import { BackButtondModule } from './components/back-button/back-button.module';

@NgModule({
    imports: [
        CommonModule,
        BackButtondModule
    ],
    declarations: [
        SpinnerComponent,
        ExponentialStrengthPipe,
        CounterComponent
    ],
    exports: [
        FormsModule,
        BackButtondModule,
        SpinnerComponent,
        ExponentialStrengthPipe,
        CounterComponent
    ]
})

export class SharedModule { }
