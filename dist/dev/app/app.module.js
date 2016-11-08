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
var interceptor_service_1 = require('./interceptor.service');
var core_module_1 = require('./core/core.module');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFFakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFFeEQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFpQ2hEO0lBQUE7SUFBeUIsQ0FBQztJQS9CMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBRVA7b0JBQ0ksT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM5QixFQUFFO29CQUNDLE9BQU8sRUFBRSxNQUFNO29CQUNmLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsV0FBSTtvQkFDYixVQUFVLEVBQUUsVUFBQyxPQUFtQixFQUFFLGNBQThCLEVBQUUsTUFBYzt3QkFDNUUsT0FBQSxJQUFJLHFDQUFlLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUM7b0JBQXBELENBQW9EO29CQUN4RCxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLHFCQUFjLENBQUM7aUJBQ3JDO2FBQ0o7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtTQUNKLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbnRlcmNlcHRvckh0dHAgfSBmcm9tICcuL2ludGVyY2VwdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC8vIENvbnRyaWJTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBwcm92aWRlOiB3aW5kb3csXHJcbiAgICAgICAgICAgIHVzZVZhbHVlOiB3aW5kb3dcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogSHR0cCxcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKGJhY2tlbmQ6IFhIUkJhY2tlbmQsIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucywgcm91dGVyOiBSb3V0ZXIpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgSW50ZXJjZXB0b3JIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zLCByb3V0ZXIpLFxyXG4gICAgICAgICAgICBkZXBzOiBbWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnNdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
