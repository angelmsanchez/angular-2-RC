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
                index_2.ContribService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUF5RyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlILHNCQUErQixrQkFBa0IsQ0FBQyxDQUFBO0FBNEJsRDtJQUFBO0lBQTRCLENBQUM7SUExQjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0JBQWM7YUFDakI7U0FDSixDQUFDOztvQkFBQTtJQUUwQixtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBCYWNrQnV0dG9uQ29tcG9uZW50LCBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsXG4gICAgICAgIFNwaW5uZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgU3Bpbm5lckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENvbnRyaWJTZXJ2aWNlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==
