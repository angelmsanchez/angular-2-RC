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
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFrRCxPQUFPLENBQUMsQ0FBQTtBQUMxRCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3hELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELGdDQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2pFLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELDBCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBRXpELElBQUksUUFBUSxHQUE0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxHQUFHLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQztBQUU3RyxJQUFJLEtBQUssR0FBb0IsbUJBQVcsQ0FDcEMsZ0NBQWMsRUFDZCxRQUFRLENBQ1gsQ0FBQztBQXVDRjtJQUFBO0lBQXlCLENBQUM7SUFyQzFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLHFDQUFnQjtnQkFDaEIsd0JBQVU7YUFFYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkO29CQUNJLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7Z0JBS0Q7b0JBQ0ksT0FBTyxFQUFFLFdBQUk7b0JBQ2IsVUFBVSxFQUFFLFVBQUMsT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQWMsRUFBRSxZQUEwQjt3QkFDeEcsT0FBQSxJQUFJLHFDQUFlLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUFsRSxDQUFrRTtvQkFDdEUsSUFBSSxFQUFFLENBQUMsaUJBQVUsRUFBRSxxQkFBYyxFQUFFLGVBQU0sRUFBRSw0QkFBWSxDQUFDO2lCQUMzRDtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsb0JBQVE7b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2lCQUNsQjthQUNKO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4vcmVkdXgvYXBwLXN0YXRlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIFN0b3JlLCBTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0b3JIdHRwIH0gZnJvbSAnLi9pbnRlcmNlcHRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU3RvcmUgfSBmcm9tICcuL3JlZHV4L2FwcC1zdG9yZSc7XHJcbmltcG9ydCB7IGNvdW50ZXJSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1eC9jb3VudGVyLXJlZHVjZXInO1xyXG5cclxubGV0IGRldnRvb2xzOiBTdG9yZUVuaGFuY2VyPEFwcFN0YXRlPiA9IHdpbmRvd1snZGV2VG9vbHNFeHRlbnNpb24nXSA/IHdpbmRvd1snZGV2VG9vbHNFeHRlbnNpb24nXSgpIDogZiA9PiBmO1xyXG5cclxubGV0IHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4gPSBjcmVhdGVTdG9yZTxBcHBTdGF0ZT4oXHJcbiAgICBjb3VudGVyUmVkdWNlcixcclxuICAgIGRldnRvb2xzXHJcbik7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgICAgICAvLyBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtb3J5U3RvcmVTZXJ2aWNlLCB7IGRlbGF5OiAxMDAwIH0pLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbnRyaWJTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHByb3ZpZGU6IHdpbmRvdyxcclxuICAgICAgICAvLyAgICAgdXNlVmFsdWU6IHdpbmRvd1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlciwgdG9hc3RzZXJ2aWNlOiBUb2FzdFNlcnZpY2UpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgSW50ZXJjZXB0b3JIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zLCByb3V0ZXIsIHRvYXN0c2VydmljZSksXHJcbiAgICAgICAgICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgUm91dGVyLCBUb2FzdFNlcnZpY2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEFwcFN0b3JlLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogc3RvcmVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
