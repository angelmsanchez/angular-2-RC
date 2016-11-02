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
                index_1.SpinnerComponent
            ],
            exports: [
                forms_1.FormsModule,
                router_1.RouterModule,
                index_1.HeaderComponent,
                index_1.NavbarComponent,
                index_1.FooterComponent,
                index_1.BackButtonComponent,
                index_1.SpinnerComponent
            ],
            providers: [
                index_2.ContribService,
                index_2.ExceptionService,
                index_2.AuthService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUF5RyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlILHNCQUE4RCxrQkFBa0IsQ0FBQyxDQUFBO0FBOEJqRjtJQUFBO0lBQTRCLENBQUM7SUE1QjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0JBQWM7Z0JBQ2Qsd0JBQWdCO2dCQUNoQixtQkFBVzthQUNkO1NBQ0osQ0FBQzs7b0JBQUE7SUFFMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgQmFja0J1dHRvbkNvbXBvbmVudCwgU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBDb250cmliU2VydmljZSwgRXhjZXB0aW9uU2VydmljZSwgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgU3Bpbm5lckNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50LFxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBTcGlubmVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29udHJpYlNlcnZpY2UsXG4gICAgICAgIEV4Y2VwdGlvblNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2aWNlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==
