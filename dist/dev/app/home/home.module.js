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
var ng2_bootstrap_1 = require('ng2-bootstrap');
var shared_module_1 = require('../shared/shared.module');
var home_routing_module_1 = require('./home.routing.module');
var home_component_1 = require('./home.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                home_routing_module_1.HomeRoutingModule,
                shared_module_1.SharedModule,
                ng2_bootstrap_1.AlertModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsOEJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBYWpEO0lBQUE7SUFBMEIsQ0FBQztJQVgzQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx1Q0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLDJCQUFXO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7U0FDSixDQUFDOztrQkFBQTtJQUV3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUucm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBBbGVydE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iXX0=
