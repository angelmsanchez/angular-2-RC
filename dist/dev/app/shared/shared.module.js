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
                router_1.RouterModule],
            declarations: [
                index_1.HeaderComponent,
                index_1.NavbarComponent,
                index_1.FooterComponent],
            exports: [
                index_1.HeaderComponent,
                index_1.NavbarComponent,
                index_1.FooterComponent,
                forms_1.FormsModule,
                router_1.RouterModule],
            providers: [
                index_2.ContribService]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUFrRSxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZGLHNCQUErQixrQkFBa0IsQ0FBQyxDQUFBO0FBb0JsRDtJQUFBO0lBQTRCLENBQUM7SUFsQjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUM7WUFDakIsWUFBWSxFQUFFO2dCQUNWLHVCQUFlO2dCQUNmLHVCQUFlO2dCQUNmLHVCQUFlLENBQUM7WUFDcEIsT0FBTyxFQUFFO2dCQUNMLHVCQUFlO2dCQUNmLHVCQUFlO2dCQUNmLHVCQUFlO2dCQUNmLG1CQUFXO2dCQUNYLHFCQUFZLENBQUM7WUFDakIsU0FBUyxFQUFFO2dCQUNQLHNCQUFjLENBQUM7U0FDdEIsQ0FBQzs7b0JBQUE7SUFFMEIsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLG9CQUFZLGVBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBOYXZiYXJDb21wb25lbnQsXHJcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29udHJpYlNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG4iXX0=
