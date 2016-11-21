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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUFrRCxPQUFPLENBQUMsQ0FBQTtBQUMxRCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3hELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3hELGdDQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2pFLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELDBCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBR3pELElBQUksUUFBUSxHQUE0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxHQUFHLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQztBQUU3RyxJQUFJLEtBQUssR0FBb0IsbUJBQVcsQ0FDcEMsZ0NBQWMsRUFDZCxRQUFRLENBQ1gsQ0FBQztBQXVDRjtJQUFBO0lBQXlCLENBQUM7SUFyQzFCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLHFDQUFnQjtnQkFDaEIsd0JBQVU7YUFFYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkO29CQUNJLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLE1BQU07b0JBQ2YsUUFBUSxFQUFFLE1BQU07aUJBQ25CO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxXQUFJO29CQUNiLFVBQVUsRUFBRSxVQUFDLE9BQW1CLEVBQUUsY0FBOEIsRUFBRSxNQUFjLEVBQUUsWUFBMEI7d0JBQ3hHLE9BQUEsSUFBSSxxQ0FBZSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQztvQkFBbEUsQ0FBa0U7b0JBQ3RFLElBQUksRUFBRSxDQUFDLGlCQUFVLEVBQUUscUJBQWMsRUFBRSxlQUFNLEVBQUUsNEJBQVksQ0FBQztpQkFDM0Q7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLG9CQUFRO29CQUNqQixRQUFRLEVBQUUsS0FBSztpQkFDbEI7YUFDSjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1NBQ0osQ0FBQzs7aUJBQUE7SUFFdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuL3JlZHV4L2FwcC1zdGF0ZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBTdG9yZSwgU3RvcmVFbmhhbmNlciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEludGVyY2VwdG9ySHR0cCB9IGZyb20gJy4vaW50ZXJjZXB0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFN0b3JlIH0gZnJvbSAnLi9yZWR1eC9hcHAtc3RvcmUnO1xyXG5pbXBvcnQgeyBjb3VudGVyUmVkdWNlciB9IGZyb20gJy4vcmVkdXgvY291bnRlci1yZWR1Y2VyJztcclxuXHJcbi8vVGhpcyBpcyBmb3IgdGhlIGV4dGVuc2lvbiBDaHJvbWVcclxubGV0IGRldnRvb2xzOiBTdG9yZUVuaGFuY2VyPEFwcFN0YXRlPiA9IHdpbmRvd1snZGV2VG9vbHNFeHRlbnNpb24nXSA/IHdpbmRvd1snZGV2VG9vbHNFeHRlbnNpb24nXSgpIDogZiA9PiBmO1xyXG5cclxubGV0IHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4gPSBjcmVhdGVTdG9yZTxBcHBTdGF0ZT4oXHJcbiAgICBjb3VudGVyUmVkdWNlcixcclxuICAgIGRldnRvb2xzXHJcbik7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgICAgICAvLyBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtb3J5U3RvcmVTZXJ2aWNlLCB7IGRlbGF5OiAxMDAwIH0pLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbnRyaWJTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IHdpbmRvdyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHdpbmRvd1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoYmFja2VuZDogWEhSQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLCByb3V0ZXI6IFJvdXRlciwgdG9hc3RzZXJ2aWNlOiBUb2FzdFNlcnZpY2UpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgSW50ZXJjZXB0b3JIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zLCByb3V0ZXIsIHRvYXN0c2VydmljZSksXHJcbiAgICAgICAgICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgUm91dGVyLCBUb2FzdFNlcnZpY2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEFwcFN0b3JlLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogc3RvcmVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
