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
                video_club_module_1.VideoClubModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }, {
                    provide: window,
                    useValue: window
                },
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions, router) {
                        return new interceptor_service_1.InterceptorHttp(backend, defaultOptions, router);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions]
                }],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsOEJBQTZCLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFDakUsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFrQ3hEO0lBQUE7SUFBeUIsQ0FBQztJQWhDMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWix3QkFBVTtnQkFDVixnQ0FBYztnQkFDZCxtQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsRUFBRTtvQkFDQyxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLFdBQUk7b0JBQ2IsVUFBVSxFQUFFLFVBQUMsT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQWM7d0JBQzVFLE9BQUEsSUFBSSxxQ0FBZSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDO29CQUFwRCxDQUFvRDtvQkFDeEQsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxDQUFDO2lCQUNyQyxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb21vZG9yb01vZHVsZSB9IGZyb20gJy4vcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlJztcclxuaW1wb3J0IHsgVmlkZW9DbHViTW9kdWxlIH0gZnJvbSAnLi92aWRlby1jbHViL3ZpZGVvLWNsdWIubW9kdWxlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0b3JIdHRwIH0gZnJvbSAnLi9pbnRlcmNlcHRvci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIEhvbWVNb2R1bGUsXHJcbiAgICAgICAgUG9tb2Rvcm9Nb2R1bGUsXHJcbiAgICAgICAgVmlkZW9DbHViTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHdpbmRvd1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlcikgPT5cclxuICAgICAgICAgICAgICAgIG5ldyBJbnRlcmNlcHRvckh0dHAoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMsIHJvdXRlciksXHJcbiAgICAgICAgICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9uc11cclxuICAgICAgICB9XSxcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
