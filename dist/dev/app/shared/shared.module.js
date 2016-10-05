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
var index_1 = require('./toolbar/index');
var index_2 = require('./navbar/index');
var index_3 = require('./name-list/index');
var index_4 = require('./services/index');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [index_3.NameListService, index_4.ContribService]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [index_1.ToolbarComponent, index_2.NavbarComponent],
            exports: [index_1.ToolbarComponent, index_2.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELHNCQUErQixrQkFBa0IsQ0FBQyxDQUFBO0FBWWxEO0lBQUE7SUFPQSxDQUFDO0lBTlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLHVCQUFlLEVBQUUsc0JBQWMsQ0FBQztTQUM3QyxDQUFDO0lBQ0osQ0FBQztJQVpIO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxDQUFDLHdCQUFnQixFQUFFLHVCQUFlLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsd0JBQWdCLEVBQUUsdUJBQWU7Z0JBQ3pDLHFCQUFZLEVBQUUsbUJBQVcsRUFBRSxxQkFBWSxDQUFDO1NBQzNDLENBQUM7O29CQUFBO0lBUUYsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL2luZGV4JztcclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL25hbWUtbGlzdC9pbmRleCc7XHJcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Rvb2xiYXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCxcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2UsIENvbnRyaWJTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
