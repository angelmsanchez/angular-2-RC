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
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var index_2 = require('./services/index');
var index_3 = require('./pipes/index');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [
                index_1.HeaderComponent,
                index_1.NavbarComponent,
                index_1.FooterComponent,
                index_1.BackButtonComponent,
                index_1.SpinnerComponent,
                index_3.ExponentialStrengthPipe
            ],
            exports: [
                forms_1.FormsModule,
                router_1.RouterModule,
                index_1.HeaderComponent,
                index_1.NavbarComponent,
                index_1.FooterComponent,
                index_1.BackButtonComponent,
                index_1.SpinnerComponent,
                index_3.ExponentialStrengthPipe
            ],
            providers: [
                index_2.ContribService,
                index_2.ExceptionService,
                index_2.AuthService,
                index_2.CanLoadService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUF5RyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlILHNCQUE4RSxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pHLHNCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQWlDeEQ7SUFBQTtJQUE0QixDQUFDO0lBL0I3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHVCQUFlO2dCQUNmLHVCQUFlO2dCQUNmLHVCQUFlO2dCQUNmLDJCQUFtQjtnQkFDbkIsd0JBQWdCO2dCQUNoQiwrQkFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7Z0JBQ2hCLCtCQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxzQkFBYztnQkFDZCx3QkFBZ0I7Z0JBQ2hCLG1CQUFXO2dCQUNYLHNCQUFjO2FBQ2pCO1NBQ0osQ0FBQzs7b0JBQUE7SUFFMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIEJhY2tCdXR0b25Db21wb25lbnQsIFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSwgRXhjZXB0aW9uU2VydmljZSwgQXV0aFNlcnZpY2UsIENhbkxvYWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEV4cG9uZW50aWFsU3RyZW5ndGhQaXBlIH0gZnJvbSAnLi9waXBlcy9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIFNwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgRXhwb25lbnRpYWxTdHJlbmd0aFBpcGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgU3Bpbm5lckNvbXBvbmVudCxcclxuICAgICAgICBFeHBvbmVudGlhbFN0cmVuZ3RoUGlwZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbnRyaWJTZXJ2aWNlLFxyXG4gICAgICAgIEV4Y2VwdGlvblNlcnZpY2UsXHJcbiAgICAgICAgQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgQ2FuTG9hZFNlcnZpY2VcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==
