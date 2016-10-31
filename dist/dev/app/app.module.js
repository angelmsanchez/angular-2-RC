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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var home_module_1 = require('./home/home.module');
var shared_module_1 = require('./shared/shared.module');
var pomodoro_module_1 = require('./pomodoro/pomodoro.module');
var video_club_module_1 = require('./video-club/video-club.module');
var interceptor_service_1 = require('./interceptor.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                home_module_1.HomeModule,
                pomodoro_module_1.PomodoroModule,
                video_club_module_1.VideoClubModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }, {
                    provide: window,
                    useValue: window
                },
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions, router) { return new interceptor_service_1.InterceptorHttp(backend, defaultOptions, router); },
                    deps: [http_1.XHRBackend, http_1.RequestOptions]
                }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsOEJBQTZCLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFDakUsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFrQ3hEO0lBQUE7SUFBeUIsQ0FBQztJQS9CMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWix3QkFBVTtnQkFDVixnQ0FBYztnQkFDZCxtQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM5QixFQUFFO29CQUNDLE9BQU8sRUFBRSxNQUFNO29CQUNmLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsV0FBSTtvQkFDYixVQUFVLEVBQUUsVUFBQyxPQUFtQixFQUFFLGNBQThCLEVBQUUsTUFBYyxJQUFLLE9BQUEsSUFBSSxxQ0FBZSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLEVBQXBELENBQW9EO29CQUN6SSxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLHFCQUFjLENBQUM7aUJBQ3JDO2FBQ0E7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtTQUNKLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUG9tb2Rvcm9Nb2R1bGUgfSBmcm9tICcuL3BvbW9kb3JvL3BvbW9kb3JvLm1vZHVsZSc7XG5pbXBvcnQgeyBWaWRlb0NsdWJNb2R1bGUgfSBmcm9tICcuL3ZpZGVvLWNsdWIvdmlkZW8tY2x1Yi5tb2R1bGUnO1xuaW1wb3J0IHsgSW50ZXJjZXB0b3JIdHRwIH0gZnJvbSAnLi9pbnRlcmNlcHRvci5zZXJ2aWNlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICBQb21vZG9yb01vZHVsZSxcbiAgICAgICAgVmlkZW9DbHViTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgICB9LCB7XG4gICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcbiAgICAgICAgdXNlVmFsdWU6IHdpbmRvd1xuICAgIH0sXG4gICAge1xuICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlcikgPT4gbmV3IEludGVyY2VwdG9ySHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucywgcm91dGVyKSxcbiAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXVxuICAgIH1cbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
