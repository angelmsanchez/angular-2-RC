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
var router_1 = require('@angular/router');
var redux_1 = require('redux');
require('rxjs/Rx');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var interceptor_service_1 = require('./interceptor.service');
var contrib_service_1 = require('./core/services/contrib.service');
var core_module_1 = require('./core/core.module');
var toast_service_1 = require('./core/toast/toast.service');
var app_store_1 = require('./redux/app-store');
var counter_reducer_1 = require('./redux/counter-reducer');
var video_club_service_1 = require('./video-club/services/video-club.service');
var devtools = window['devToolsExtension'] ? window['devToolsExtension']() : function (f) { return f; };
var store = redux_1.createStore(counter_reducer_1.counterReducer, devtools);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                contrib_service_1.ContribService,
                video_club_service_1.VideoClubService,
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                },
                {
                    provide: window,
                    useValue: window
                },
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions, router, toastservice) {
                        return new interceptor_service_1.InterceptorHttp(backend, defaultOptions, router, toastservice);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router, toast_service_1.ToastService]
                },
                {
                    provide: app_store_1.AppStore,
                    useValue: store
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFrRCxPQUFPLENBQUMsQ0FBQTtBQUMxRCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3hELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELGdDQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2pFLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELDBCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELG1DQUFpQywwQ0FBMEMsQ0FBQyxDQUFBO0FBSTVFLElBQUksUUFBUSxHQUE0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxHQUFHLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQztBQUU3RyxJQUFJLEtBQUssR0FBb0IsbUJBQVcsQ0FDcEMsZ0NBQWMsRUFDZCxRQUFRLENBQ1gsQ0FBQztBQXdDRjtJQUFBO0lBQXlCLENBQUM7SUF0QzFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLHFDQUFnQjtnQkFDaEIsd0JBQVU7YUFFYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkLHFDQUFnQjtnQkFDaEI7b0JBQ0ksT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM5QjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsTUFBTTtvQkFDZixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLFdBQUk7b0JBQ2IsVUFBVSxFQUFFLFVBQUMsT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQWMsRUFBRSxZQUEwQjt3QkFDeEcsT0FBQSxJQUFJLHFDQUFlLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUFsRSxDQUFrRTtvQkFDdEUsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxFQUFFLGVBQU0sRUFBRSw0QkFBWSxDQUFDO2lCQUMzRDtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsb0JBQVE7b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2lCQUNsQjthQUNKO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgU3RvcmUsIFN0b3JlRW5oYW5jZXIgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbnRlcmNlcHRvckh0dHAgfSBmcm9tICcuL2ludGVyY2VwdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gJy4vcmVkdXgvYXBwLXN0b3JlJztcclxuaW1wb3J0IHsgY291bnRlclJlZHVjZXIgfSBmcm9tICcuL3JlZHV4L2NvdW50ZXItcmVkdWNlcic7XHJcbmltcG9ydCB7IFZpZGVvQ2x1YlNlcnZpY2UgfSBmcm9tICcuL3ZpZGVvLWNsdWIvc2VydmljZXMvdmlkZW8tY2x1Yi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSAnLi9yZWR1eC9hcHAtc3RhdGUnO1xyXG4vL1RoaXMgaXMgZm9yIHRoZSBleHRlbnNpb24gQ2hyb21lXHJcbmxldCBkZXZ0b29sczogU3RvcmVFbmhhbmNlcjxBcHBTdGF0ZT4gPSB3aW5kb3dbJ2RldlRvb2xzRXh0ZW5zaW9uJ10gPyB3aW5kb3dbJ2RldlRvb2xzRXh0ZW5zaW9uJ10oKSA6IGYgPT4gZjtcclxuXHJcbmxldCBzdG9yZTogU3RvcmU8QXBwU3RhdGU+ID0gY3JlYXRlU3RvcmU8QXBwU3RhdGU+KFxyXG4gICAgY291bnRlclJlZHVjZXIsXHJcbiAgICBkZXZ0b29sc1xyXG4pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICAgICAgLy8gSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbW9yeVN0b3JlU2VydmljZSwgeyBkZWxheTogMTAwMCB9KSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb250cmliU2VydmljZSxcclxuICAgICAgICBWaWRlb0NsdWJTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHdpbmRvd1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlciwgdG9hc3RzZXJ2aWNlOiBUb2FzdFNlcnZpY2UpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgSW50ZXJjZXB0b3JIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zLCByb3V0ZXIsIHRvYXN0c2VydmljZSksXHJcbiAgICAgICAgICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgUm91dGVyLCBUb2FzdFNlcnZpY2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEFwcFN0b3JlLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogc3RvcmVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
