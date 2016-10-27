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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsOEJBQTZCLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFDakUsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFpQ3hEO0lBQUE7SUFBeUIsQ0FBQztJQTlCMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsbUNBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsRUFBRTtvQkFDQyxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLFdBQUk7b0JBQ2IsVUFBVSxFQUFFLFVBQUMsT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQWMsSUFBSyxPQUFBLElBQUkscUNBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFwRCxDQUFvRDtvQkFDekksSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxDQUFDO2lCQUNyQzthQUNBO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb21vZG9yb01vZHVsZSB9IGZyb20gJy4vcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlJztcclxuaW1wb3J0IHsgVmlkZW9DbHViTW9kdWxlIH0gZnJvbSAnLi92aWRlby1jbHViL3ZpZGVvLWNsdWIubW9kdWxlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0b3JIdHRwIH0gZnJvbSAnLi9pbnRlcmNlcHRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgSG9tZU1vZHVsZSxcclxuICAgICAgICBQb21vZG9yb01vZHVsZSxcclxuICAgICAgICBWaWRlb0NsdWJNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbe1xyXG4gICAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICB9LCB7XHJcbiAgICAgICAgcHJvdmlkZTogd2luZG93LFxyXG4gICAgICAgIHVzZVZhbHVlOiB3aW5kb3dcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogSHR0cCxcclxuICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlcikgPT4gbmV3IEludGVyY2VwdG9ySHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucywgcm91dGVyKSxcclxuICAgICAgICBkZXBzOiBbWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnNdXHJcbiAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
