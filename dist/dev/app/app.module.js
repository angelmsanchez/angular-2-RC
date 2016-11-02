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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsOEJBQTZCLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFDakUsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFrQ3hEO0lBQUE7SUFBeUIsQ0FBQztJQWhDMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWix3QkFBVTtnQkFDVixnQ0FBYztnQkFDZCxtQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsRUFBRTtvQkFDQyxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLFdBQUk7b0JBQ2IsVUFBVSxFQUFFLFVBQUMsT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQWM7d0JBQzVFLE9BQUEsSUFBSSxxQ0FBZSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDO29CQUFwRCxDQUFvRDtvQkFDeEQsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxDQUFDO2lCQUNyQyxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9SeCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFBvbW9kb3JvTW9kdWxlIH0gZnJvbSAnLi9wb21vZG9yby9wb21vZG9yby5tb2R1bGUnO1xuaW1wb3J0IHsgVmlkZW9DbHViTW9kdWxlIH0gZnJvbSAnLi92aWRlby1jbHViL3ZpZGVvLWNsdWIubW9kdWxlJztcbmltcG9ydCB7IEludGVyY2VwdG9ySHR0cCB9IGZyb20gJy4vaW50ZXJjZXB0b3Iuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIEhvbWVNb2R1bGUsXG4gICAgICAgIFBvbW9kb3JvTW9kdWxlLFxuICAgICAgICBWaWRlb0NsdWJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB3aW5kb3dcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChiYWNrZW5kOiBYSFJCYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsIHJvdXRlcjogUm91dGVyKSA9PlxuICAgICAgICAgICAgICAgIG5ldyBJbnRlcmNlcHRvckh0dHAoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMsIHJvdXRlciksXG4gICAgICAgICAgICBkZXBzOiBbWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnNdXG4gICAgICAgIH1dLFxuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
