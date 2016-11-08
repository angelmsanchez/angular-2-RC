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
                index_2.ExponentialStrengthPipe
            ],
            exports: [
                forms_1.FormsModule,
                back_button_module_1.BackButtondModule,
                index_1.SpinnerComponent,
                index_2.ExponentialStrengthPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRzdDLHNCQUFzRCxvQkFBb0IsQ0FBQyxDQUFBO0FBQzNFLHNCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCxtQ0FBa0MsNkNBQTZDLENBQUMsQ0FBQTtBQXFCaEY7SUFBQTtJQUE0QixDQUFDO0lBbkI3QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFFWixzQ0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0JBQWdCO2dCQUNoQiwrQkFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUJBQVc7Z0JBRVgsc0NBQWlCO2dCQUNqQix3QkFBZ0I7Z0JBQ2hCLCtCQUF1QjthQUMxQjtTQUNKLENBQUM7O29CQUFBO0lBRTBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBCYWNrQnV0dG9uQ29tcG9uZW50LCBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgRXhwb25lbnRpYWxTdHJlbmd0aFBpcGUgfSBmcm9tICcuL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgQmFja0J1dHRvbmRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFjay1idXR0b24vYmFjay1idXR0b24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBCYWNrQnV0dG9uZE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFNwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgRXhwb25lbnRpYWxTdHJlbmd0aFBpcGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8gUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIEJhY2tCdXR0b25kTW9kdWxlLFxyXG4gICAgICAgIFNwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgRXhwb25lbnRpYWxTdHJlbmd0aFBpcGVcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==
