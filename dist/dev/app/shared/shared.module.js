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
                index_2.AuthService,
                index_2.CanLoadService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUF5RyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlILHNCQUE4RSxrQkFBa0IsQ0FBQyxDQUFBO0FBK0JqRztJQUFBO0lBQTRCLENBQUM7SUE3QjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsdUJBQWU7Z0JBQ2YsMkJBQW1CO2dCQUNuQix3QkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0JBQWM7Z0JBQ2Qsd0JBQWdCO2dCQUNoQixtQkFBVztnQkFDWCxzQkFBYzthQUNqQjtTQUNKLENBQUM7O29CQUFBO0lBRTBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBCYWNrQnV0dG9uQ29tcG9uZW50LCBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UsIEV4Y2VwdGlvblNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBDYW5Mb2FkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcclxuICAgICAgICBGb290ZXJDb21wb25lbnQsXHJcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBTcGlubmVyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIFNwaW5uZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb250cmliU2VydmljZSxcclxuICAgICAgICBFeGNlcHRpb25TZXJ2aWNlLFxyXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIENhbkxvYWRTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG4iXX0=
