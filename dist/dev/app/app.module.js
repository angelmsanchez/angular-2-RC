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
var contrib_service_1 = require('./core/services/contrib.service');
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
                core_module_1.CoreModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                contrib_service_1.ContribService,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBRTdFLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFJakIsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsb0NBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFDeEQsZ0NBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFDakUsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFvQ2hEO0lBQUE7SUFBeUIsQ0FBQztJQWpDMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsaUJBQVU7Z0JBQ1YscUNBQWdCO2dCQUNoQix3QkFBVTthQUdiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2Q7b0JBQ0ksT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM5QixFQUFFO29CQUNDLE9BQU8sRUFBRSxNQUFNO29CQUNmLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsV0FBSTtvQkFDYixVQUFVLEVBQUUsVUFBQyxPQUFtQixFQUFFLGNBQThCLEVBQUUsTUFBYzt3QkFDNUUsT0FBQSxJQUFJLHFDQUFlLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUM7b0JBQXBELENBQW9EO29CQUN4RCxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLHFCQUFjLENBQUM7aUJBQ3JDO2FBQ0o7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtTQUNKLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQgeyBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0b3JIdHRwIH0gZnJvbSAnLi9pbnRlcmNlcHRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEluTWVtb3J5U3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2luLW1lbW9yeS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICAvLyBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtb3J5U3RvcmVTZXJ2aWNlLCB7IGRlbGF5OiAxMDAwIH0pLFxyXG5cclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb250cmliU2VydmljZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICAgICAgICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogd2luZG93LFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogd2luZG93XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEh0dHAsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChiYWNrZW5kOiBYSFJCYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsIHJvdXRlcjogUm91dGVyKSA9PlxyXG4gICAgICAgICAgICAgICAgbmV3IEludGVyY2VwdG9ySHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucywgcm91dGVyKSxcclxuICAgICAgICAgICAgZGVwczogW1hIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
