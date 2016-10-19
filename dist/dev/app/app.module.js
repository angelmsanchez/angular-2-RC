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
var app_component_1 = require('./app.component');
var home_module_1 = require('./home/home.module');
var shared_module_1 = require('./shared/shared.module');
var pomodoro_module_1 = require('./pomodoro/pomodoro.module');
var video_club_module_1 = require('./video-club/video-club.module');
require('rxjs/Rx');
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
                video_club_module_1.VideoClubModule
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3RELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUFnQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUEwQmpCO0lBQUE7SUFBeUIsQ0FBQztJQXhCMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsbUNBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsRUFBRTtvQkFDQyxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsTUFBTTtpQkFDbkIsQ0FBQztZQUNGLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1NBQ0osQ0FBQzs7aUJBQUE7SUFFdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb21vZG9yb01vZHVsZSB9IGZyb20gJy4vcG9tb2Rvcm8vcG9tb2Rvcm8ubW9kdWxlJztcclxuaW1wb3J0IHsgVmlkZW9DbHViTW9kdWxlIH0gZnJvbSAnLi92aWRlby1jbHViL3ZpZGVvLWNsdWIubW9kdWxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBIb21lTW9kdWxlLFxyXG4gICAgICAgIFBvbW9kb3JvTW9kdWxlLFxyXG4gICAgICAgIFZpZGVvQ2x1Yk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW3tcclxuICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxyXG4gICAgICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xyXG4gICAgfSwge1xyXG4gICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcclxuICAgICAgICB1c2VWYWx1ZTogd2luZG93XHJcbiAgICB9XSxcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
