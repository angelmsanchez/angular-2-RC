"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var index_1 = require('./components/index');
var index_2 = require('./pipes/index');
var back_button_module_1 = require('./components/back-button/back-button.module');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                back_button_module_1.BackButtondModule
            ],
            declarations: [
                index_1.SpinnerComponent,
                index_2.ExponentialStrengthPipe,
                index_1.CounterComponent
            ],
            exports: [
                forms_1.FormsModule,
                back_button_module_1.BackButtondModule,
                index_1.SpinnerComponent,
                index_2.ExponentialStrengthPipe,
                index_1.CounterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLHNCQUFtRCxvQkFBb0IsQ0FBQyxDQUFBO0FBRXhFLHNCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxtQ0FBa0MsNkNBQTZDLENBQUMsQ0FBQTtBQXFCaEY7SUFBQTtJQUE0QixDQUFDO0lBbkI3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixzQ0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0JBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLHdCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxtQkFBVztnQkFDWCxzQ0FBaUI7Z0JBQ2pCLHdCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix3QkFBZ0I7YUFDbkI7U0FDSixDQUFDOztvQkFBQTtJQUUwQixtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU3Bpbm5lckNvbXBvbmVudCwgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbi8vIGltcG9ydCB7IEJhY2tCdXR0b25Db21wb25lbnQsIFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBFeHBvbmVudGlhbFN0cmVuZ3RoUGlwZSB9IGZyb20gJy4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYWNrQnV0dG9uZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQmFja0J1dHRvbmRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTcGlubmVyQ29tcG9uZW50LFxyXG4gICAgICAgIEV4cG9uZW50aWFsU3RyZW5ndGhQaXBlLFxyXG4gICAgICAgIENvdW50ZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQmFja0J1dHRvbmRNb2R1bGUsXHJcbiAgICAgICAgU3Bpbm5lckNvbXBvbmVudCxcclxuICAgICAgICBFeHBvbmVudGlhbFN0cmVuZ3RoUGlwZSxcclxuICAgICAgICBDb3VudGVyQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG4iXX0=
